const input = require('./input');
const sample = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
const sample1 = `2-4,6-8`;
const sample2 = `2-4,6-8
2-3,4-5`;

const parseInput = (input: string) => input.split('\n');
const parseLine = (input: string) =>
  input.split(',').map((strRange) => {
    const [strNum1, strNum2] = strRange.split('-');
    return [Number(strNum1), Number(strNum2)];
  });
const isSubset = (range1: [number, number], range2: [number, number]) => {
  const isRange1SubsetOfRange2 = range1[0] >= range2[0] && range1[1] <= range2[1];
  const isRange2SubsetOfRange1 = range2[0] >= range1[0] && range2[1] <= range1[1];
  return isRange1SubsetOfRange2 || isRange2SubsetOfRange1;
};
const hasOverlap = (range1: [number, number], range2: [number, number]) =>
  range1[1] >= range2[0] && range2[1] >= range1[0];

const getAnswer = (input: string, comparisonFn: Function) => {
  const parsed = parseInput(input).map(parseLine);
  const sum = parsed.reduce((sum, [pair1, pair2]) => {
    if (comparisonFn([pair1[0], pair1[1]], [pair2[0], pair2[1]])) {
      sum += 1;
    }
    return sum;
  }, 0);
  return sum;
};

// getAnswer(input, isSubset);
console.log(getAnswer(input, hasOverlap));
export {};
