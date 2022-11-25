const checkboxElem = document.querySelector('.task-status');

const getCheckbox = () => {
  console.log(checkboxElem.checked);
  console.log(checkboxElem.value);
};

checkboxElem.addEventListener('change', getCheckbox);
