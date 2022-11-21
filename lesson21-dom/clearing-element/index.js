export function clearList() {
  const element = document.querySelector('.categories');
  if (!element) return;
  element.innerHTML = '';
  return element;
}
clearList();
