'use strict';
const slides=[...document.querySelectorAll('.slide')];
let current=0,notes=false;
function show(n){current=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>{s.hidden=i!==current;s.querySelector('.notes').hidden=!notes;});document.getElementById('slide-count').textContent=(current+1)+' / '+slides.length;document.getElementById('prev').disabled=current===0;document.getElementById('next').disabled=current===slides.length-1;history.replaceState(null,'','#slide-'+(current+1));window.scrollTo(0,0);}
function readHash(){const n=Number(location.hash.replace('#slide-',''));return Number.isInteger(n)&&n>0?n-1:0;}
function toggleNotes(){notes=!notes;document.getElementById('notes-toggle').setAttribute('aria-pressed',String(notes));slides[current].querySelector('.notes').hidden=!notes;}
document.getElementById('prev').onclick=()=>show(current-1);
document.getElementById('next').onclick=()=>show(current+1);
document.getElementById('notes-toggle').onclick=toggleNotes;
document.getElementById('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{document.getElementById('fullscreen').textContent='Use browser full screen';}};
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target.closest('button,a,input,textarea,select'))return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(current+1);}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1);}else if(e.key==='Home'){e.preventDefault();show(0);}else if(e.key==='End'){e.preventDefault();show(slides.length-1);}else if(e.key.toLowerCase()==='n')toggleNotes();});
window.addEventListener('hashchange',()=>show(readHash()));show(readHash());
