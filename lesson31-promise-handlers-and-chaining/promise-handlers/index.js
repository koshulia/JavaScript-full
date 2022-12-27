'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}@example.com`,
          userId,
        });
      }, 1000);
    }
  });
  return request;
};

// requestUserData('user-1').then(data => console.log(data));
// requestUserData('user-2')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));

// requestUserData('broken')
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally'));

// requestUserData('broken').catch(error => console.log(error));
// requestUserData('broken-1').finally(() => console.log('finally'));
