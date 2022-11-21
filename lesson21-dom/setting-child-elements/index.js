export function setButton(buttonText) {
  const button = `<button>${buttonText}</button>`;
  return (document.querySelector('body').innerHTML = button);
}

console.log(setButton('Test button'));
