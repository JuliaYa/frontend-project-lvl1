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

  const q1 = rand(1000);
  const q2 = rand(1000);
  const q3 = rand(1000);

  const a1 = isPrime(q1) ? 'yes' : 'no';
  const a2 = isPrime(q2) ? 'yes' : 'no';
  const a3 = isPrime(q3) ? 'yes' : 'no';

  const gameParams = {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    questions: [q1, q2, q3],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
