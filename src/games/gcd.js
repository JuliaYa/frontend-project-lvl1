import runGame from '../engine.js';
import generateRundomInt from '../utils.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

/**
 *
 * @param { Number } num1
 * @param { Number } num2
 * @returns { Number }  greatest common delimiter
 */
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
  const number1 = generateRundomInt();
  const number2 = generateRundomInt();

  const question = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));

  return [question, answer];
};

export default () => {
  runGame(DESCRIPTION, generateRound);
};
