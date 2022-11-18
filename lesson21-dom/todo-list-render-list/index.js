'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const listItemElems = tasksList.map(({ text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkBoxElem = document.createElement('input');
    checkBoxElem.setAttribute('type', 'checkbox');
    checkBoxElem.checked = done;
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    checkBoxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkBoxElem, text);
    return listItemElem;
  });

  listElem.append(...listItemElems);
};

renderTasks(tasks);
