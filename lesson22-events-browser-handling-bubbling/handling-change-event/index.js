const inputElem = document.querySelector('.text-input');

const getInputValue = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', getInputValue);
