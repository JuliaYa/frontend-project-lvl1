import { rand, startGame } from '../src/index.js';

// FIXME: one function for question and answer
const getProgression = (start, interval, count = 10) => {
  const progression = [start];

  for (let i = 1; i < count; i += 1) {
    const nextElement = progression[i - 1] + interval;
    progression.push(nextElement);
  }
  return progression;
};

export default () => {
  const q1 = getProgression(rand(100), rand(100));
  const q3 = getProgression(rand(100), rand(100));
  const q2 = getProgression(rand(100), rand(100));

  const hiddenInd1 = rand(10);
  const hiddenInd2 = rand(10);
  const hiddenInd3 = rand(10);

  const a1 = q1[hiddenInd1].toString();
  const a2 = q2[hiddenInd2].toString();
  const a3 = q3[hiddenInd3].toString();

  q1[hiddenInd1] = '..';
  q2[hiddenInd2] = '..';
  q3[hiddenInd3] = '..';

  const gameParams = {
    description: 'What number is missing in the progression?',
    questions: [q1.join(' '), q2.join(' '), q3.join(' ')],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
