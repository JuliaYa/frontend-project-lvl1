#!/usr/bin/env node

import readlineSynk from 'readline-sync';

const askNameAndGreet = () => {
  const name = readlineSynk.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

function rand(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  return Math.floor(rand);
 }

export { askNameAndGreet, rand };