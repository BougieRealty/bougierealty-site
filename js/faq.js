
(function(){
  const filter = document.getElementById('faq-filter');
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (filter) {
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      items.forEach(d => {
        const text = d.textContent.toLowerCase();
        d.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el && el.tagName.toLowerCase() === 'details') {
      el.setAttribute('open', '');
      setTimeout(() => el.scrollIntoView({behavior: 'smooth', block: 'start'}), 50);
    }
  }
  document.querySelectorAll('.faq-item .copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-target').replace('#','');
      const url = `${location.origin}${location.pathname}#${target}`;
      navigator.clipboard.writeText(url).then(() => {
        const old = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = old, 900);
        history.replaceState(null, '', `#${target}`);
      });
      e.stopPropagation();
    });
  });
})();
