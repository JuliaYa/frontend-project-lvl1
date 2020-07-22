import startGame from '../index.js';
import { generateNumber } from '../utils.js';

const getProgression = (start, interval, count = 10) => {
  const progression = [start];

  for (let i = 1; i < count; i += 1) {
    const nextElement = progression[i - 1] + interval;
    progression.push(nextElement);
  }
  return progression;
};

const getChallenge = () => {
  const progressionSize = 10;
  const progression = getProgression(generateNumber(), generateNumber(), progressionSize);
  const hiddenIndex = generateNumber(0, progressionSize);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), answer.toString()];
};

export default () => {
  const challenges = [getChallenge(), getChallenge(), getChallenge()];

  const gameParams = {
    description: 'What number is missing in the progression?',
    challenges,
  };

  startGame(gameParams);
};
