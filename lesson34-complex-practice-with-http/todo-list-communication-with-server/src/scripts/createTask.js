import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const TaskTitleInputElem = document.querySelector('.task-input');

  const text = TaskTitleInputElem.value;
  if (!text) return;
  TaskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. prepare data
// 2.write data to data base
// 3.read new data from server
// 4.save new data to front-end storage
// 5.update UI based on new data
