const buttons = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

const btnArr = [...buttons];

btnArr.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
