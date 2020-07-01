#!/usr/bin/env node

import readlineSynk from 'readline-sync';

const startGame = () => {
  const answerYes = 'yes';
  const answerNo = 'no';
  
  const name = readlineSynk.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  let exit = false;
  while (!exit) {
    const number = Math.round(Math.random() * 10);
    const even = number % 2 === 0; 
    console.log(`Question: ${number}`);

    const answer = readlineSynk.question('Your answer: ');
    const trueAnswer = even ? answerYes : answerNo;
    if(answer.toLocaleLowerCase() === trueAnswer){
        console.log('Correct!');
        counter += 1;
        exit = counter === 3;
    } else {
        exit = true;
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return;
    }
  }
    console.log(`Congratulations, ${name}!`);
};

export { startGame };