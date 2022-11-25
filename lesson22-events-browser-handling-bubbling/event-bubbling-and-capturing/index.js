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

const clear = () => {
  eventsListElem.innerHTML = '';
};

clearBtn.addEventListener('click', clear);

const logGrayDiv = logTarget.bind(null, 'DIV', 'gray');
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const attachHandlers = () => {
  divElem.addEventListener('click', logGrayDiv);
  pElem.addEventListener('click', logGrayP);
  spanElem.addEventListener('click', logGraySpan);

  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
};

attachHandlersBtn.addEventListener('click', attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener('click', logGrayDiv);
  pElem.removeEventListener('click', logGrayP);
  spanElem.removeEventListener('click', logGraySpan);

  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
};

removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlers();
