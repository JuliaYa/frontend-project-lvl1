import runGame from '../engine.js';
import generateRundomInt from '../utils.js';

const DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

/**
 *
 * @param {Number} startNum
 * @param {Numer} diff
 */

const generateProgression = (startNum, diff) => {
  const progression = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(startNum + diff * i);
  }

  return progression;
};

/**
 * @reterns {[String, String]}
 */

const generateRound = () => {
  const progression = generateProgression(generateRundomInt(), generateRundomInt());

  const hiddenIndex = generateRundomInt(0, PROGRESSION_LENGTH - 1);
  const answer = String(progression[hiddenIndex]);
  const question = progression.map((element, index) => (index === hiddenIndex ? '..' : element)).join(' ');

  return [question, answer];
};

export default () => {
  runGame(DESCRIPTION, generateRound);
};
