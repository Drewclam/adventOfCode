const parse = input => input.split('\n').map(str => str.split('').map(Number));

const getAdjacent = (row, col, arr) => {
    if (row === 0) {
        if (col === 0) {
            const down = arr[row + 1][col];
            const right = arr[row][col + 1];
            return [down, right];
        } else if (col === arr[row].length - 1) {
            const down = arr[row + 1][col];
            const left = arr[row][col - 1];
            return [down, left];
        } else {
            const left = arr[row][col - 1];
            const down = arr[row + 1][col];
            const right = arr[row][col + 1];
            return [down, right, left];
        }
    } else if (row === arr.length - 1) {
        if (col === 0) {
            const up = arr[row - 1][col];
            const right = arr[row][col + 1];
            return [up, right];
        } else if (col === arr[row].length - 1) {
            const up = arr[row - 1][col];
            const left = arr[row][col - 1];
            return [up, left];
        } else {
            const left = arr[row][col - 1];
            const up = arr[row - 1][col];
            const right = arr[row][col + 1];
            return [up, right, left];
        }
    } else {
        if (col === 0) {
            const down = arr[row + 1][col];
            const up = arr[row - 1][col];
            const right = arr[row][col + 1];
            return [up, down, right];
        } else if (col === arr[row].length - 1) {
            const down = arr[row + 1][col];
            const up = arr[row - 1][col];
            const left = arr[row][col - 1];
            return [up, down, left];
        }
        const down = arr[row + 1][col];
        const up = arr[row - 1][col];
        const right = arr[row][col + 1];
        const left = arr[row][col - 1];

        return [up, down, left, right];
    }
}

const isLowest = (val, nums) => val < nums.sort((a, b) => a - b)[0];

const getRiskLevelsSum = (lowPoints) => lowPoints.reduce((sum, lowPoint) => sum += (lowPoint + 1), 0);

const solveP1 = (arr) => {
    const lowest = [];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col ++) {
            const adjacentNums = getAdjacent(row, col, arr);
            const height = arr[row][col];
            if (isLowest(height, adjacentNums)) {
                lowest.push(height);
            }
        }
    }
    return getRiskLevelsSum(lowest);
} 
module.exports = { parse, getAdjacent, isLowest, getRiskLevelsSum, solveP1 };