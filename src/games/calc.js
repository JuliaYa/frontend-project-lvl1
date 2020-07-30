import startGame from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator - ${operator}`);
  }
};

const generateRound = () => {
  const operand1 = generateNumber();
  const operand2 = generateNumber();
  const operator = getRandomOperator();

  const expression = `${operand1} ${operator} ${operand2}`;
  const result = calculate(operand1, operand2, operator);

  return [expression, result.toString()];
};

export default () => {
  startGame(description, generateRound);
};
