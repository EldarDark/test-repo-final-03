export default function decorate(block) {
  const inner = block.querySelector(':scope > div');
  inner.classList.add('cta-banner-inner');
  const bgColor = block.textContent.match(/#[a-fA-F0-9]{6}/);
  if (bgColor) block.style.backgroundColor = bgColor[0];
}