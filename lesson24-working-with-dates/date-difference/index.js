export const getDiff = (startDate, endDate) => {
  const res = new Date(startDate) - new Date(endDate);
  const days = Math.ceil(res / (1000 * 3600 * 24));
  const hours = Math.ceil(res / days / 3600);
  const minutes = hours / 60;
  const seconds = minutes % 1000;
  //   console.log(res);
  console.log(days);
  console.log(hours);
  //   console.log(minutes);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const result = getDiff(new Date(2022, 11, 12, 16, 45, 15), new Date(2019, 4, 5, 13, 30, 56));

console.log(result);
