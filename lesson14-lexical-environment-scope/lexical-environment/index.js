'use strict';
let message = 'Hello';

export const sendMessage = name => {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
};

export function setMessage(text) {
  message = text;
}

sendMessage('Tom');

setMessage('Just learn it');

sendMessage('Bob');
