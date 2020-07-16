import { rand, startGame } from '../index.js';

export default () => {
  const getExprResult = (expr) => { // FIXME: one function for question and answer
    const [num1, operator, num2] = expr.split(' ');
    let result = 0;

    switch (operator) {
      case '+':
        result = parseInt(num1, 10) + parseInt(num2, 10);
        break;
      case '-':
        result = parseInt(num1, 10) - parseInt(num2, 10);
        break;
      case '*':
        result = parseInt(num1, 10) * parseInt(num2, 10);
        break;
      case '/':
        result = parseInt(num1, 10) / parseInt(num2, 10);
        break;
      default:
        result = null;
        break;
    }
    return result;
  };

  const q1 = `${rand(100)} + ${rand(100)}`;
  const q2 = `${rand(100)} - ${rand(100)}`;
  const q3 = `${rand(100)} * ${rand(100)}`;

  const a1 = getExprResult(q1).toString();
  const a2 = getExprResult(q2).toString();
  const a3 = getExprResult(q3).toString();

  const gameParams = {
    description: 'What is the result of the expression?',
    questions: [q1, q2, q3],
    answers: [a1, a2, a3],
  };

  startGame(gameParams);
};
