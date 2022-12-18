import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const inputButtonElem = document.querySelector('.create-task-btn');
  inputButtonElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('change', onToggleTask);
};
