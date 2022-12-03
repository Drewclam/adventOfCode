const input = require('./input');
const sample = `A Y
B X
C Z`;

// lose: 0, draw: 3, 6: win

const winCombinations = {
  A: 'Y',
  B: 'Z',
  C: 'X',
};
const loseCombinations = {
  A: 'Z',
  B: 'X',
  C: 'Y',
};
const desiredResult = {
  X: (opponent) => loseCombinations[opponent],
  Y: (opponent) => opponent,
  Z: (opponent) => winCombinations[opponent],
};
const convertLetterToValue = (letter) => {
  if (letter === 'A' || letter === 'X') {
    return 1;
  }
  if (letter === 'B' || letter === 'Y') {
    return 2;
  }
  return 3;
};
const parseInput = (input) => input.split('\n').map((str) => str.trim().split(' '));
const getOutcome = ([opponent, me]) => {
  const shapeValues = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  if (winCombinations[opponent] === me) {
    return 6 + shapeValues[me];
  }
  if (loseCombinations[opponent] === me) {
    return 0 + shapeValues[me];
  }
  return 3 + shapeValues[me];
};

const calculateScore = (input) => {
  let score = 0;
  const rounds = parseInput(input);
  rounds.forEach((round) => {
    score += getOutcome(round);
  });
  return score;
};

const getOutcome2 = ([opponent, outcome]) => {
  const outcomes = {
    Y: 3,
    X: 0,
    Z: 6,
  };
  const me = convertLetterToValue(desiredResult[outcome](opponent));
  return me + outcomes[outcome];
};

const calculateScore2 = (input) => {
  let score = 0;
  const rounds = parseInput(input);
  rounds.forEach((round) => {
    score += getOutcome2(round);
  });
  return score;
};

console.log(calculateScore2(input));
