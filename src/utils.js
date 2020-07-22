const generateNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

// eslint-disable-next-line import/prefer-default-export
export { generateNumber };
