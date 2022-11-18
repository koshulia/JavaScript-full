export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

export const getOwnProps = obj => {
  const ownProps = [];
  for (let prop in obj) {
    if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
      ownProps.push(prop);
    }
  }
  return ownProps;
};

// console.log(Object.hasOwnPropertyNames(vehicle));

// console.log(typeof getOwnProps);

// console.log(typeof ship.startMachine);
// console.log(typeof vehicle.name);

console.log(getOwnProps(ship));
console.log(getOwnProps(vehicle));
