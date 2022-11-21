export function setTitle(text) {
  const res = document.querySelector('.title');
  res.textContent = text;
  return res;
}

console.log(setTitle('tfghujio'));
