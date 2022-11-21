export function setButton(buttonText) {
  const buttonString = `<button>${buttonText}</button>`;
  const button = document.querySelector('body');
  button.innerHTML = buttonString;
  return button;
}

console.log(setButton('Test button'));
