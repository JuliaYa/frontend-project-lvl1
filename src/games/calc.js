import startGame, { getNumberOfRounds } from '../index.js';
import { generateNumber } from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
};

const generateRound = () => {
  const operand1 = generateNumber();
  const operand2 = generateNumber();
  const operator = getRandomOperator();

  const expression = `${operand1} ${operator} ${operand2}`;
  let result = 0;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      result = null;
      break;
  }
  return [expression, result.toString()];
};

export default () => {
  const description = 'What is the result of the expression?';
  const rounds = Array.from(Array(getNumberOfRounds()), () => generateRound());

  startGame(description, rounds);
};
