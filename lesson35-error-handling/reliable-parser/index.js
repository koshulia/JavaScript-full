export const parseUser = JSONString => {
  try {
    const result = JSON.parse(JSONString);
    console.log(result);
    return result;
  } catch (error) {
    console.log('ERROR', error);
    return null;
  }
};

const test = '"title":"title"} ';

console.log(parseUser(test));
