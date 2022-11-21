export function setTitle(text) {
  const res = document.querySelector('.title');
  if (!res) return;
  res.textContent = text;
  return res;
}

console.log(setTitle('tfghujio'));
