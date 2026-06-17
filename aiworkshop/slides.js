// NCAD AI Workshop — slide deck engine (no dependencies)
// Scroll-based deck with keyboard navigation:
//   → / ↓ / space : next slide      ← / ↑ : previous slide
//   Home / End    : first / last    N     : toggle instructor notes
// Adds: progress bar, slide counter, #hash deep links (#12).

document.addEventListener('DOMContentLoaded', function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  // chrome: progress bar, counter, help hint
  var progress = document.createElement('div');
  progress.className = 'deck-progress';
  document.body.appendChild(progress);

  var counter = document.createElement('div');
  counter.className = 'slide-counter';
  document.body.appendChild(counter);

  var help = document.createElement('div');
  help.className = 'deck-help';
  help.textContent = '← → navigate · N notes';
  document.body.appendChild(help);

  var current = 0;

  function clamp(i) { return Math.max(0, Math.min(slides.length - 1, i)); }

  function go(i, smooth) {
    current = clamp(i);
    slides[current].scrollIntoView({ behavior: smooth === false ? 'auto' : 'smooth' });
    update();
  }

  function update() {
    counter.textContent = (current + 1) + ' / ' + slides.length;
    progress.style.width = (((current + 1) / slides.length) * 100) + '%';
    if (history.replaceState) history.replaceState(null, '', '#' + (current + 1));
  }

  // track scroll position so manual scrolling stays in sync
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var mid = window.scrollY + window.innerHeight / 2;
      for (var i = 0; i < slides.length; i++) {
        var s = slides[i];
        if (mid >= s.offsetTop && mid < s.offsetTop + s.offsetHeight) { current = i; break; }
      }
      update();
      ticking = false;
    });
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown':
        e.preventDefault(); go(current + 1); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
        e.preventDefault(); go(current - 1); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(slides.length - 1); break;
      case 'n': case 'N':
        document.body.classList.toggle('show-notes'); break;
    }
  });

  // deep link: #12 jumps to slide 12
  var hash = parseInt((location.hash || '').replace('#', ''), 10);
  if (hash && hash >= 1 && hash <= slides.length) {
    setTimeout(function () { go(hash - 1, false); }, 50);
  } else {
    update();
  }
});
