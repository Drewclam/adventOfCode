const { sample, input } = require('./input');

const toMatrix = (str) => str.split("\n").map(str => str.split(''));

const getHighest = arr => {
    const map = arr.reduce((map, current) => {
        if (!map[current]) {
            map[current] = 1;
        } else {
            map[current] += 1;
        }
        return map;
    }, {});
    return Object.keys(map).reduce((highest, key) => {
        if (highest.length < 1 || map[key] > highest[1]) {
            highest[0] = key;
            highest[1] = map[key];
            return highest;
        } 
        return highest;
    }, []);
}

const getLowest = arr => {
    const map = arr.reduce((map, current) => {
        if (!map[current]) {
            map[current] = 1;
        } else {
            map[current] += 1;
        }
        return map;
    }, {});
    return Object.keys(map).reduce((lowest, key) => {
        if (lowest.length < 1 || map[key] < lowest[1]) {
            lowest[0] = key;
            lowest[1] = map[key];
            return lowest;
        } 
        return lowest;
    }, []);
}



const getGamma = numbers => {
    // numbers[0][0]
    // numbers[1][0]
    // numbers[2][0]
    console.log(numbers);
    const bits = numbers[0].map((number, idx) => {
       return numbers.map((row) => row[idx]);
    })
    const gammaArr = bits.map(bit => Number(getHighest(bit)[0]));
    return parseInt(gammaArr.join(''), 2)
}

const getEpsilon = numbers => {
    const bits = numbers[0].map((number, idx) => {
        return numbers.map((row) => row[idx]);
     })
     const gammaArr = bits.map(bit => Number(getLowest(bit)[0]));
     return parseInt(gammaArr.join(''), 2)
}

const getPowerConsumption = (numbers) => getGamma(numbers) * getEpsilon(numbers);

console.log(getPowerConsumption(toMatrix(input)));