// NCAD AI Workshop — page behaviours (no dependencies)
// 1. Copy buttons on .prompt blocks
// 2. Smooth-scroll already handled by CSS; nothing else to do.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.prompt').forEach(function (block) {
    if (block.querySelector('.copy-btn')) return;
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      // Copy the prompt text without label/button text
      var clone = block.cloneNode(true);
      clone.querySelectorAll('.copy-btn, .prompt-label').forEach(function (el) { el.remove(); });
      var text = clone.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied ✓';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1600);
      }, function () {
        btn.textContent = 'Select + ⌘C';
      });
    });
    block.appendChild(btn);
  });
});
