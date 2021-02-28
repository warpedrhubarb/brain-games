const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isEven = (num) => num % 2 === 0;

export { getRandomInt, isEven };
