import readlineSync from 'readline-sync';

export const ROUNDS_COUNT = 3;

/**
 *
 * @param {Function} nextRound
 */
const generateRounds = (nextRound) => {
  const rounds = [];
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    rounds.push(nextRound());
  }
  return rounds;
};

export default (description, nextRound) => {
  const rounds = generateRounds(nextRound);

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of rounds) {
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
