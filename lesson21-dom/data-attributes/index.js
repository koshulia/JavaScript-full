export function squaredNumbers() {
  const number = document.querySelectorAll('.number');
  Array.from(number).map(num => {
    return (num.dataset.squaredNumber = num.dataset.number ** 2);
  });
}

squaredNumbers();
