import readlineSync from 'readline-sync';

// TODO: rename file

const numberOfRounds = 3;

export default (description, nextRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  let round = 1;

  while (round <= numberOfRounds) {
    const [question, answer] = nextRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    round += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
