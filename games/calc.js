import { rand, startGame } from '../src/index.js';

export default () => {
  const q1 = `${rand(100)} + ${rand(100)}`;
  const q2 = `${rand(100)} - ${rand(100)}`;
  const q3 = `${rand(100)} * ${rand(100)}`;

  // TODO: remove eval and choose operator randomly
  const a1 = eval(q1).toString();
  const a2 = eval(q2).toString();
  const a3 = eval(q3).toString();

  const gameParams = {
    description: 'What is the result of the expression?',
    questions: [q1, q2, q3],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
