export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('accordion-item');
    const label = row.children[0];
    const content = row.children[1];
    label.classList.add('accordion-header');
    content.classList.add('accordion-content');
    label.addEventListener('click', () => {
      const expanded = label.getAttribute('aria-expanded') === 'true';
      label.setAttribute('aria-expanded', !expanded);
      content.classList.toggle('is-open');
    });
  });
}