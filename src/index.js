/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const startGame = (params) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(params.description);

  const { challenges } = params;

  let fail = false;
  // eslint-disable-next-line prefer-const
  for (let challenge of challenges) { // don't know how to rewrite it yet
    const [question, answer] = challenge;

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      fail = true;
      break;
    }
    console.log('Correct!');
  }
  if (!fail) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
