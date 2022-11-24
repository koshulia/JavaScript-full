export function getSection(num) {
  const span = document.querySelectorAll('span');
  const filteredSpan = [...span];

  const answer = filteredSpan.find(el => Number(el.getAttribute('data-number')) === num);
  const attribute = answer.parentElement.getAttribute('data-section');
  return attribute;
}

console.log(getSection(3));
