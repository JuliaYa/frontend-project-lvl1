import { rand, startGame } from '../index.js';

const findGCD = ([num1, num2]) => {
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

export default () => {
  const q1 = `${rand(100)} ${rand(100)}`;
  const q2 = `${rand(100)} ${rand(100)}`;
  const q3 = `${rand(100)} ${rand(100)}`;

  const a1 = findGCD(q1.split(' ')).toString();
  const a2 = findGCD(q2.split(' ')).toString();
  const a3 = findGCD(q3.split(' ')).toString();

  const gameParams = {
    description: 'Find the greatest common divisor of given numbers.',
    questions: [q1, q2, q3],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
