const baseUrl = 'https://63b4cded0f49ecf50894549c.mockapi.io/tasks';

const mapTasks = tasks => {
  tasks.map((_id, ...rest) => ({ ...rest, id: _id }));
};

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (updatedtaskData, taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedtaskData),
  });
};
