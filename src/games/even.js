import startGame, { getNumberOfRounds } from '../index.js';
import { generateNumber } from '../utils.js';

const generateRound = () => {
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const question = generateNumber();
  const answer = isEven(question);

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = Array.from(Array(getNumberOfRounds()), () => generateRound());

  startGame(description, rounds);
};
