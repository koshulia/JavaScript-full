const getPeople = obj => {
  return Object.values(obj)
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, [])
    .map(el => el.name);
};

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

console.log(getPeople(rooms));
