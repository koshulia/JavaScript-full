export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

const deferredHi = defer(user.sayHi.bind(user), 2000);
deferredHi();
deferredHi.call({ name: 'Bob' });

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const deferredSum = defer(sum, 1000);
// deferredSum(1, 4);

// const callbackPrompt = {
//   message: 'Share your number',
//   showPrompt() {
//     prompt(this.message);
//   },
// };

// const deferredCallbackPrompt = defer(callbackPrompt.showPrompt(), 2000);
// deferredCallbackPrompt();
