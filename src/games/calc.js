import startGame from '../engine.js';
import generateRundomInt from '../utils.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

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
  const operand1 = generateRundomInt();
  const operand2 = generateRundomInt();
  const operator = OPERATORS[generateRundomInt(0, 2)];

  const expression = `${operand1} ${operator} ${operand2}`;
  const result = calculate(operand1, operand2, operator);

  return [expression, String(result)];
};

export default () => {
  startGame(DESCRIPTION, generateRound);
};
