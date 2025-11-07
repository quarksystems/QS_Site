
// main.js - simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in') });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));

  // mobile menu toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
