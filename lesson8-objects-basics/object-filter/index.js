/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
  const resObj = {};

  for (let key in obj) {
    if (obj[key] > 17) resObj[key] = obj[key];
  }

  return resObj;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
