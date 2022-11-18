export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName: function (fullName) {
    const splitted = fullName.split(' ');
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  },
};

console.log(user);

user.getFullName();

user.setFullName('Jane Doe');
console.log(user);
