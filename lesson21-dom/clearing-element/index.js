export function clearList() {
  const element = document.querySelector('.categories');
  element.innerHTML = '';
  return element;
}
clearList();
