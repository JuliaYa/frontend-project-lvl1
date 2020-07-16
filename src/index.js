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

  let counter = 0;
  let exit = false;

  const { questions, answers } = params;

  while (!exit) {
    console.log(`Question: ${questions[counter]}`);

    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = answers[counter];

    if (answer.toLocaleLowerCase() === trueAnswer) {
      console.log('Correct!');
      counter += 1;
      exit = counter === 3;// fixme
    } else {
      exit = true;

      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { rand, startGame };
