import startGame, { getNumberOfRounds } from '../index.js';
import { generateNumber } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateRound = () => {
  const question = generateNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const rounds = Array.from(Array(getNumberOfRounds()), () => generateRound());

  startGame(description, rounds);
};
