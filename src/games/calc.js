import { rand, startGame } from '../index.js';

export default () => {
  const getRandomOperator = () => {
    const operators = ['+', '-', '*', '/'];

    return operators[Math.floor(Math.random() * operators.length)];
  };

  const getChallenge = () => {
    const operand1 = rand(100);
    const operand2 = rand(100);
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
      case '/':
        result = operand1 / operand2;
        break;
      default:
        result = null;
        break;
    }
    return [expression, result.toString()];
  };

  const challenges = [getChallenge(), getChallenge(), getChallenge()];

  const gameParams = {
    description: 'What is the result of the expression?',
    challenges,
  };

  startGame(gameParams);
};
