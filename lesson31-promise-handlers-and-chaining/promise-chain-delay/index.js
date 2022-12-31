export const delay = ms => {
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return p;
};

delay(3000).then(() => console.log('Done'));
