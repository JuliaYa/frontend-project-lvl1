import { rand, startGame } from '../index.js';

export default () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const getChallenge = () => {
    const question = rand(100);
    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  const challenges = [getChallenge(), getChallenge(), getChallenge()];

  const gameParams = {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    challenges,
  };

  startGame(gameParams);
};
