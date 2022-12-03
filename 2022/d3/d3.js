const input = require('./input');
const sample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const divideLine = (line) => {
  const idx = line.length / 2;
  const first = line.substring(0, idx);
  const second = line.slice(idx);
  return [first, second];
};
const getDuplicatesMap = (line1, line2) => {
  return line1.split('').reduce((map, char) => {
    if (line2.indexOf(char) !== -1 && !map[char]) {
      map[char] = true;
    }
    return map;
  }, {});
};
const getPriority = (char) => {
  const charCode = char.charCodeAt();
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  }
  return charCode - 38;
};
const parseDuplicatesMap = (map) => {
  return Object.keys(map).reduce((prioritiesSum, key) => {
    prioritiesSum += getPriority(key);
    return prioritiesSum;
  }, 0);
};

const getAnswer = (input) => {
  const rucksack = input.split('\n').map(divideLine);
  let sum = 0;
  rucksack.forEach(([compart1, compart2]) => {
    const duplicates = getDuplicatesMap(compart1, compart2);
    sum += parseDuplicatesMap(duplicates);
  });
  return sum;
};

console.log(getAnswer(input));
