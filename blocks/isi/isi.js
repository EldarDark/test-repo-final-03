export default function decorate(block) {
  const title = block.querySelector('h2, h3');
  const content = block.querySelector('div:last-child');
  block.classList.add('isi-tray');
  if (block.classList.contains('fixed')) {
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      block.style.height = scrollPercent > 90 ? 'auto' : '150px';
    });
  }
}