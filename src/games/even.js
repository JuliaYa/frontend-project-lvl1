import runGame from '../engine.js';
import generateRundomInt from '../utils.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRundomInt();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGame(DESCRIPTION, generateRound);
};
