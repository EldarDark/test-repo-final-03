export default function decorate(block) {
  const quoteWrapper = block.querySelector(':scope > div > div');
  const blockquote = document.createElement('blockquote');
  blockquote.innerHTML = quoteWrapper.innerHTML;
  quoteWrapper.innerHTML = '';
  quoteWrapper.append(blockquote);
}