export function finishList() {
  const listElem = document.querySelector('.list');
  const specialElem = document.querySelector('.special');
  const firstItem = document.createElement('li');
  firstItem.textContent = 1;
  const fourthItem = document.createElement('li');
  fourthItem.textContent = 4;
  const sixthItem = document.createElement('li');
  sixthItem.textContent = 6;
  const eighthItem = document.createElement('li');
  eighthItem.textContent = 8;
  if (!firstItem) return;
  listElem.prepend(firstItem);
  listElem.append(eighthItem);
  specialElem.before(fourthItem);
  specialElem.after(sixthItem);
}

finishList();
