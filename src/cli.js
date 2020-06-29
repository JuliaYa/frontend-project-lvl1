#!/usr/bin/env node

import readlineSynk from 'readline-sync';

const askNameAndGreet = () => {
  const name = readlineSynk.question('May I have your name? ');
  var a = 2
  console.log(`Hello, ${name}!`);
}

export { askNameAndGreet };