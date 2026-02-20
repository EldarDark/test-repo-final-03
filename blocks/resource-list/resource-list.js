export default function decorate(block) {
  [...block.children].forEach(row => {
    row.classList.add('resource-item');
    const link = row.querySelector('a');
    if (link && link.href.endsWith('.pdf')) {
      row.classList.add('pdf-resource');
    }
  });
}