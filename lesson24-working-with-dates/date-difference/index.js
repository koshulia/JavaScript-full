export const getDiff = (startDate, endDate) => {
  if (startDate > endDate) return;
  const res = new Date(startDate) - new Date(endDate);
  const days = Math.round(res / (1000 * 3600 * 24));
  const hours = new Date(res).getUTCHours();
  const minutes = new Date(res).getMinutes();
  const seconds = new Date(res).getSeconds();

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const result = getDiff(new Date(2022, 11, 12, 16, 45, 18), new Date(2019, 4, 5, 10, 30, 56));

const result1 = getDiff(new Date(2002, 11, 12, 16, 40, 15), new Date(2019, 4, 5, 6, 30, 56));

console.log(result);
console.log(result1);
