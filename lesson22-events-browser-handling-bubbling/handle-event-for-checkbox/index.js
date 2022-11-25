const checkboxElem = document.querySelector('.task-status');

const getCheckbox = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('click', getCheckbox);
