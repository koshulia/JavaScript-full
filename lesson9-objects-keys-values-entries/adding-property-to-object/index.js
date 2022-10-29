/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  Object.assign((userData.id = userId));
  return userData;
}

function addPropertyV3(userData, userId) {
  const result = {};
  Object.assign(result, userData);
  result.id = userId;
  return result;
}

function addPropertyV4(userData, userId) {
  const result = { ...userData };
  result.id = userId;
  return result;
}

// put your code here

// put your code here

// put your code here

// examples
const user = {
  name: 'Sam',
};
// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567'));
console.log(addPropertyV3(user, '1234567'));
// console.log(addPropertyV4(user, '1234567'));
console.log(user);
