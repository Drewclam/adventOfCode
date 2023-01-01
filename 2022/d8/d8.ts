import { parseFile } from 'utils';

export const build2DArr = async () => {
  const input = await parseFile('input.txt');
  return input.split('\n').map((charRow) => charRow.split('').map(Number));
};

export const getNorthValsExclusive = (arr, rowIdx, colIdx) => {
  const res = [];
  for (let i = rowIdx - 1; i >= 0; i--) {
    res.push(arr[i][colIdx]);
  }
  return res;
};

export const getSouthValsExclusive = (arr, rowIdx, colIdx) => {
  const res = [];
  for (let i = rowIdx + 1; i < arr.length; i++) {
    res.push(arr[i][colIdx]);
  }
  return res;
};

export const getEastValsExclusive = (arr: number[][], rowIdx, colIdx) => {
  const res = [];
  for (let i = colIdx + 1; i < arr[rowIdx].length; i++) {
    res.push(arr[rowIdx][i]);
  }
  return res;
};

export const getWestValsExclusive = (arr: number[][], rowIdx, colIdx) => {
  const res = [];
  for (let i = colIdx - 1; i >= 0; i--) {
    res.push(arr[rowIdx][i]);
  }
  return res;
};

export const isVisible = (arr: number[], val: number) => arr.every((v) => val > v);

build2DArr().then((arr) => {
  console.log({ arr });
  const visibleVals = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const northVals = getNorthValsExclusive(arr, i, j);
      const eastVals = getEastValsExclusive(arr, i, j);
      const southVals = getSouthValsExclusive(arr, i, j);
      const westVals = getWestValsExclusive(arr, i, j);
      const val = arr[i][j];

      if (
        isVisible(northVals, val) ||
        isVisible(eastVals, val) ||
        isVisible(southVals, val) ||
        isVisible(westVals, val)
      ) {
        visibleVals.push(val);
      }
    }
  }
  console.log({ visibleVals: visibleVals.length });
});
