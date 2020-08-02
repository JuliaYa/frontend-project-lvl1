/**
 *
 * @param {Number} min
 * @param {Number} max
 */

const generateRundomInt = (min = 0, max = 100) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export default generateRundomInt;
