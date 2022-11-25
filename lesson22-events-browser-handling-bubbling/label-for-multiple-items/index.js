const buttonElems = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.getAttribute('data-page-number'));
};

const buttonArr = [...buttonElems];

buttonArr.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
