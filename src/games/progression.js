import { rand, startGame } from '../index.js';

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
  const progression = getProgression(rand(100), rand(100), progressionSize);
  const hiddenIndex = rand(progressionSize);
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
