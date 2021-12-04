const { parseInput } = require('../../utils/parseInput');
const { input, sample } = require('./input');
const parseArr = (arr) => arr.map((instruction) => {
    const split = instruction.split(' ');
    return [split[0], Number(split[1])];
});

const parsedSample = parseArr(parseInput(sample));
const parsedInput = parseArr(parseInput(input));

const getForward = () => {
    return (value, horizontal, depth, aim) => {
        const newHorizontal = horizontal + value;
        const newDepth = depth + (aim > 0 ? value * aim : aim);
        return [newHorizontal, newDepth, aim];
    }
}

const getDownDiff = (value, horizontal, depth, aim) => {
    return [horizontal, depth, aim + value];
}

const getUpDiff = (value, horizontal, depth, aim) => {
    return [horizontal, depth, aim - value];
}

const getRes = (data) => {
    const [horizontal, depth ] = data.reduce(([horizontal, depth, aim], [instruction, value]) => {
        if (instruction === 'forward') {
            return getForward(value, horizontal, depth, aim);
        } else if (instruction === 'down') {
            return getDownDiff(value, horizontal, depth, aim);
        } else if (instruction === 'up') {
            return getUpDiff(value, horizontal, depth, aim);
        }
        return [horizontal, depth, aim];
    }, [0, 0, 0]);
    return horizontal * depth;
}

console.log(getRes(parsedInput));