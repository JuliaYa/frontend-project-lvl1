import { rand, startGame } from '../index.js';

const getChallenge = () => {
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const question = rand(100);
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
