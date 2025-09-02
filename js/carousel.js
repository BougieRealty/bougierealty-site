(function(){
  const container = document.getElementById('carousel');
  if(!container) return;
  const slides = Array.from(container.querySelectorAll('.slide'));
  let i = 0;
  function show(idx){
    slides.forEach((s, j)=>{ s.style.display = j === idx ? 'block' : 'none'; });
  }
  show(i);
  container.querySelector('#prev').addEventListener('click', ()=>{ i = (i - 1 + slides.length) % slides.length; show(i); });
  container.querySelector('#next').addEventListener('click', ()=>{ i = (i + 1) % slides.length; show(i); });
  setInterval(()=>{ i = (i + 1) % slides.length; show(i); }, 6000);
})();
