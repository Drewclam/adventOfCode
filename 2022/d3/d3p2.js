const input = require('./input');
const sample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`;
const sample2 = `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
const sample3 = `${sample}\n${sample2}`;

let temp = [];
const parseInput = (input) =>
  input.split('\n').reduce((groups, line, idx) => {
    temp.push(line);
    if ((idx + 1) % 3 === 0) {
      groups.push(temp);
      temp = [];
    }
    return groups;
  }, []);
const findLargest = (elves) => elves.sort((a, b) => b.length - a.length)[0];
const isBadge = (elves, char) => elves.every((elf) => elf.includes(char));
const getPriority = (char) => {
  const charCode = char.charCodeAt();
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  }
  return charCode - 38;
};

const findBadge = (elves) => {
  const largest = findLargest(elves);
  for (let i = 0; i < largest.length; i++) {
    const char = largest[i];
    if (isBadge(elves, char)) {
      return char;
    }
  }
};

const getAnswer = (input) => {
  let sum = 0;
  const elfGroups = parseInput(input);
  elfGroups.forEach((elfGroup) => {
    const badge = findBadge(elfGroup);
    sum += getPriority(badge);
  });
  return sum;
};

console.log(getAnswer(input));
