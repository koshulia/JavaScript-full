const singleUseBtn = document.querySelector('.single-use-btn');

const singleUse = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', singleUse);
};

singleUseBtn.addEventListener('click', singleUse);
