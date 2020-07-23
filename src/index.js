/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getNumberOfRounds = () => numberOfRounds;

export { getNumberOfRounds };

export default (description, rounds) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  // eslint-disable-next-line prefer-const
  for (let round of rounds) { // don't know how to rewrite it yet
    const [question, answer] = round;

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
