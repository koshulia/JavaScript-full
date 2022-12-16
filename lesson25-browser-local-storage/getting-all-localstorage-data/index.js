localStorage.clear();
localStorage.setItem('name', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('age', JSON.stringify({ age: 17 }));
localStorage.setItem('hobbies', JSON.stringify({ hobbies: ['skiing', 'paragliding'] }));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

console.log(getLocalStorageData());
