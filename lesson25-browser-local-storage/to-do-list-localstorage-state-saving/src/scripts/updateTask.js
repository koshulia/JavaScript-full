import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item');

  if (!isCheckbox) return;

  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;

      if (done) {
        const { parentNode } = e.target;
        parentNode.classList.add('list__item_done');
      }

      return {
        ...task,
        done,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
};

// export const changeStatus = event => {
//   const { parentNode } = event.target;
//   const checkbox = event.target;
//   if (checkbox.checked) {
//     parentNode.classList.add('list__item_done');
//   } else {
//     parentNode.classList.remove('list__item_done');
//   }

//   const foundedTask = tasks.find(task => task.id === checkbox.dataset.id);
//   foundedTask.done = checkbox.checked;
//   renderTasks(tasks);
// };
