export default function decorate(block) {
  const link = block.querySelector('a').href;
  block.innerHTML = `<video controls><source src="${link}" type="video/mp4"></video>`;
}