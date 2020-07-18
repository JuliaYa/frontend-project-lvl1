/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const rand = (maxLimit = 100) => {
  const randomNumber = Math.random() * maxLimit;
  return Math.floor(randomNumber);
};

const startGame = (params) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(params.description);

  const { challenges } = params;

  // eslint-disable-next-line prefer-const
  for (let challenge of challenges) {
    const [question, answer] = challenge;

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { rand, startGame };
