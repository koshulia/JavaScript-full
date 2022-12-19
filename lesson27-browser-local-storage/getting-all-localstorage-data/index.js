localStorage.clear();
localStorage.setItem('name', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('age', JSON.stringify({ age: 17 }));
localStorage.setItem('hobbies', JSON.stringify({ hobbies: ['skiing', 'paragliding'] }));
localStorage.setItem('male', JSON.stringify({ male: true }));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());
