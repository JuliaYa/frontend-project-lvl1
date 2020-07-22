import startGame from '../index.js';
import { generateNumber } from '../utils.js';

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

const getChallenge = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  return [`${number1} ${number2}`, findGCD(number1, number2).toString()];
};

export default () => {
  const challenges = [getChallenge(), getChallenge(), getChallenge()];

  const gameParams = {
    description: 'Find the greatest common divisor of given numbers.',
    challenges,
  };

  startGame(gameParams);
};
