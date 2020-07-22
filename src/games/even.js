import startGame from '../index.js';
import { generateNumber } from '../utils.js';

const getChallenge = () => {
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const question = generateNumber();
  const answer = isEven(question);

  return [question, answer];
};

export default () => {
  const challenges = [getChallenge(), getChallenge(), getChallenge()];

  const gameParams = {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    challenges,
  };

  startGame(gameParams);
};
