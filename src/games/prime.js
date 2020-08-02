import startGame from '../engine.js';
import generateRandomInt from '../utils.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomInt();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame(DESCRIPTION, generateRound);
};
