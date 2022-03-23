const generateDailyRandomNumber = (): number => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  let dateNumber = Number(date);
  let x = Math.sin(dateNumber++) * 10000;
  return x - Math.floor(x);
};

export default generateDailyRandomNumber;
