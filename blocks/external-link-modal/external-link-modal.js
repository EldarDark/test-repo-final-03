export default function decorate(block) {
  document.addEventListener('click', (e) => {
    const origin = window.location.origin;
    const link = e.target.closest('a');
    if (link && !link.href.includes(origin)) {
      e.preventDefault();
      block.classList.add('is-visible');
    }
  });
}