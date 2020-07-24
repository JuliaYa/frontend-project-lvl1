import startGame, { getNumberOfRounds } from '../index.js';
import { generateNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = Array.from(Array(getNumberOfRounds()), () => generateRound());

  startGame(description, rounds);
};
