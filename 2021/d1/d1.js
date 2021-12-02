// count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.)
const { parseInput } = require('../../utils/parseInput');
const input = parseInput(require('./input'));
const sample = `199
200
208
210
200
207
240
269
260
263`;
const parsedSample = parseInput(sample);

const hasIncreased = (first, second) => {
    if (first < second) {
        return true;
    }
    return false;
}

const countIncreases = (input) => input.reduce((acc, current, idx, arr) => {
    const prev = arr[idx - 1];
    if (!prev) {
        return acc;
    }

    if (hasIncreased(prev, current)) {
        return acc += 1;
    }
    return acc;
}, 0);

console.log(countIncreases(input)); //1462