import { instructions, input } from './input';

const sampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;
const sampleInstructions = `move 1 from 2 to 1
 move 3 from 1 to 3
 move 2 from 2 to 1
 move 1 from 1 to 2`;
const sampleInstruction = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const parseInput = (input): [string[], string[][]] => {
  const lines: string[] = input.split('\r').map((str) => str.split('\n'));
  const twoDimensionalStrArr = lines.flat().map((line) => {
    return line.match(/.{1,4}/g).map((char) => char.slice(0, 3));
  });

  const indexes = twoDimensionalStrArr.pop().map((str) => str.trim());
  return [indexes, twoDimensionalStrArr];
};

const parseInstruction = (rawInstruction: string) => {
  const split = rawInstruction.split(' ').filter((val) => val !== '');
  return split.filter((val, idx) => {
    return idx % 2 !== 0;
  });
};

const createStacks = (stackKeys: string[], twoDimensionArr: string[][]) => {
  const stacks: { [key: string]: string[] } = {};
  twoDimensionArr.forEach((line) => {
    line.forEach((box, idx) => {
      if (box.trim() !== '') {
        const key = stackKeys[idx];
        if (stacks[key]) {
          stacks[key].unshift(box);
        } else {
          stacks[key] = [box];
        }
      }
    });
  });
  return stacks;
};
const unwrapBox = (box: string) => (!!box ? box[1] : box);
const singleMoves = (
  stacks: { [key: string]: string[] },
  amount: number,
  start: string,
  destination: string,
) => {
  for (let i = 0; i < amount; i++) {
    const box = stacks[start].pop();
    if (box) {
      stacks[destination].push(box);
    }
  }
  return stacks;
};
const multiMoves = (
  stacks: { [key: string]: string[] },
  amount: number,
  start: string,
  destination: string,
) => {
  const tempStack = [];
  for (let i = 0; i < amount; i++) {
    const box = stacks[start].pop();
    if (box) {
      tempStack.push(box);
    }
  }
  tempStack.reverse().forEach((box) => {
    stacks[destination].push(box);
  });
};

const executeInstructions = (
  input,
  instructions,
  executeInstruction: (
    stacks: { [key: string]: string[] },
    amount: number,
    start: string,
    destination: string,
  ) => any,
) => {
  const [keys, twoDimensionalArr] = parseInput(input);
  const stacks = createStacks(keys, twoDimensionalArr);
  const parsedInstructions: string[][] = instructions.split('\n').map(parseInstruction);

  parsedInstructions.forEach(([amountStr, startKey, destinationKey]) => {
    const amount = Number(amountStr);
    executeInstruction(stacks, amount, startKey, destinationKey);
    console.log({ stacks });
  });
  const topStackAggregate = Object.values(stacks).reduce((aggregate, stack) => {
    const box = unwrapBox(stack.pop());
    if (box) {
      aggregate += box;
    }
    return aggregate;
  }, '');
  console.log(topStackAggregate);
  return topStackAggregate;
};

executeInstructions(input, instructions, multiMoves);

export {};
