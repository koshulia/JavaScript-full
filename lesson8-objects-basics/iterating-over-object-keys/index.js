/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

getKeys(transaction);
