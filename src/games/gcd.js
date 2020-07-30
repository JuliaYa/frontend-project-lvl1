import startGame from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let temp;
  let a = num1;
  let b = num2;

  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  return [`${number1} ${number2}`, findGCD(number1, number2).toString()];
};

export default () => {
  startGame(description, generateRound);
};
