const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const eventsListElem = document.querySelector('.events-list');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const clear = () => {
  eventsListElem.innerHTML = '';
};

clearBtn.addEventListener('click', clear);

const attachHandlers = () => {
  divElem.addEventListener('click', logGreyDiv);
  pElem.addEventListener('click', logGreyP);
  spanElem.addEventListener('click', logGreySpan);

  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
};

attachHandlersBtn.addEventListener('click', attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv);
  pElem.removeEventListener('click', logGreyP);
  spanElem.removeEventListener('click', logGreySpan);

  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
};

removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlers();
