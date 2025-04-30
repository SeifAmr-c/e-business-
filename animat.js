const item = document.querySelectorAll('.item');
window.addEventListener('scroll', () => {
  item.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
});
window.dispatchEvent(new Event('scroll'));