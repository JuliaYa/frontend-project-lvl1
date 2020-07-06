#!/usr/bin/env node

import readlineSynk from 'readline-sync';
import { rand } from '../src/cli.js';

const startGame = () => {
  const answerYes = 'yes';
  const answerNo = 'no';
  
  const name = readlineSynk.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let counter = 0;
  let exit = false;
  while (!exit) {
    const operands = ['+', '-', '*'];
    const firstNmber = rand(100);
    const secondNumber = rand(100);

    const exp = `${firstNmber} ${operands[counter]} ${secondNumber}`; 
    console.log(`Question: ${exp}`);

    const answer = readlineSynk.question('Your answer: ');
    const trueAnswer = eval(exp);
    if (parseInt(answer, 10) === trueAnswer) {
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