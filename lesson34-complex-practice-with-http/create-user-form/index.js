// 1. check validation
// 2. post data to the server
// 3. get data from server
// 4. show data in alert

const baseUrl = 'https://63b4cded0f49ecf50894549c.mockapi.io/submits';

const buttonElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const validation = () => {
  const result = formElem.reportValidity();
  if (result) {
    buttonElem.removeAttribute('disabled');
  } else {
    buttonElem.setAttribute('disabled', true);
  }
};

const sendData = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const getData = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};
// JSON.stringify(response.json());

const onFormSubmit = event => {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(formElem));
  console.log(userData);
  sendData(userData);
  getData();
};

formElem.addEventListener('input', validation);

formElem.addEventListener('submit', onFormSubmit);
