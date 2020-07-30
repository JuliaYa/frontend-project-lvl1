import startGame from '../engine.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame(description, generateRound);
};
