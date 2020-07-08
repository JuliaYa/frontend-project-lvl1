import { rand, startGame } from '../src/index.js';

export default () => {
  const q1 = rand(100);
  const q2 = rand(100);
  const q3 = rand(100);

  const a1 = q1 % 2 === 0 ? 'yes' : 'no';
  const a2 = q2 % 2 === 0 ? 'yes' : 'no';
  const a3 = q3 % 2 === 0 ? 'yes' : 'no';

  const gameParams = {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    questions: [q1, q2, q3],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
