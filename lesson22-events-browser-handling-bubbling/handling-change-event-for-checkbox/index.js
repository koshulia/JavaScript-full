const checkboxElem = document.querySelector('.task-status');

const checkboxCondition = event => {
  console.log(event.target.checked);
};

checkboxElem.addEventListener('change', checkboxCondition);
