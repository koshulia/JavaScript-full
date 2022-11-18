export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'Tom', age: 17, email: 'tom@gmail.com' },
    { name: 'John', age: 18, email: 'bob@gmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return {
          email,
          message: `Dear ${name}! ${this.message}`,
        };
      });
  },
};

console.log(event.getInvitations());
