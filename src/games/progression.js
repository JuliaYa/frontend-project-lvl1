import startGame from '../engine.js';
import { generateNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = () => {
  const progression = [];
  const step = generateNumber();

  progression.push(generateNumber());
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const generateRound = () => {
  /* мне кажется что скрытый индекс в генерацию прогрессии добавлять не стот */
  const progression = getProgression();

  const hiddenIndex = generateNumber(0, progressionLength);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), answer.toString()];
};

export default () => {
  startGame(description, generateRound);
};
