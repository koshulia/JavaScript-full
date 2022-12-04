const tasks = [
  { text: 'Buy milk', id: '1', done: false },
  { text: 'Pick up Tom from airport', id: '2', done: false },
  { text: 'Visit party', id: '3', done: false },
  { text: 'Visit doctor', id: '4', done: true },
  { text: 'Buy meat', id: '5', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const inputButtonElem = document.querySelector('.create-task-btn');

const renderTasks = () => {
  console.log('render', tasks);
  listElem.innerHTML = '';
  const tasksElems = [];
  tasks.forEach(task => {
    tasksElems.push(task);
  });
  const sortedTasks = tasksElems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...sortedTasks);
};

//algo
//1. create new task by pushing it into array after click event
//2. clear input field
//3. add id for new items
//4. make checkbox dynamic
//  4.1 add class list__item_done for done tasks
//  4.2 remove this class from undone ones
//  4.3 find elem by id

const createNewTask = () => {
  if (!inputElem.value) return;
  const taskText = inputElem.value;
  const lastItem = tasks[tasks.length - 1];
  const newTask = { text: taskText, id: `${Number(lastItem.id) + 1}`, done: false };
  tasks.push(newTask);
  renderTasks(tasks);
  inputElem.value = '';
};

const changeStatus = event => {
  const { parentNode } = event.target;
  const checkbox = event.target;
  if (checkbox.checked) {
    parentNode.classList.add('list__item_done');
  } else {
    parentNode.classList.remove('list__item_done');
  }

  const foundedTask = tasks.find(task => task.id === checkbox.dataset.id);
  foundedTask.done = checkbox.checked;
  renderTasks(tasks);
};

inputButtonElem.addEventListener('click', createNewTask);
listElem.addEventListener('click', changeStatus);

renderTasks(tasks);
