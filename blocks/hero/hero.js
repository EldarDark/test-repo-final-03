export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('hero-container');
  const row = block.querySelector(':scope > div');
  if (row) {
    const [img, content] = row.children;
    if (img) img.classList.add('hero-bg');
    if (content) {
      content.classList.add('hero-text-wrapper');
      const h1 = content.querySelector('h1');
      if (h1) h1.classList.add('hero-headline');
    }
  }
}