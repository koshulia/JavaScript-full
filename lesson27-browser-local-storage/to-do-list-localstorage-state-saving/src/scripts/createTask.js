import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const TaskTitleInputElem = document.querySelector('.task-input');

  const text = TaskTitleInputElem.value;
  if (!text) return;
  TaskTitleInputElem.value = '';

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};
