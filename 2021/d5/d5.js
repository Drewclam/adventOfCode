const parse = input => input.split('\n').map(str => str.split('').map(Number));

// [up, down, left, right]
const getAdjacent = (row, col, arr) => {
    const down = arr[row + 1]?.[col];
    const right = arr[row]?.[col + 1];
    const left = arr[row]?.[col - 1];
    const up = arr[row - 1]?.[col];
    if (row === 0) {
        if (col === 0) {
            return [null, down, null, right];
        } else if (col === arr[row].length - 1) {
            return [null, down, left, null];
        } else {
            return [null, down, left, right];
        }
    } else if (row === arr.length - 1) {
        if (col === 0) {
            return [up, null, null, right];
        } else if (col === arr[row].length - 1) {
            return [up, null, left, null];
        } else {
            return [up, null, left, right];
        }
    }

    if (col === 0) {
        return [up, down, null, right];
    } else if (col === arr[row].length - 1) {
        return [up, down, left, null];
    }

    return [up, down, left, right];
}

const isLowest = (val, nums) => val < nums.filter(x => x !== null).sort((a, b) => a - b)[0];

const getRiskLevelsSum = (lowPoints) => lowPoints.reduce((sum, lowPoint) => sum += (lowPoint + 1), 0);

const solveP1 = (arr) => {
    const lowest = [];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            const adjacentNums = getAdjacent(row, col, arr);
            const height = arr[row][col];
            if (isLowest(height, adjacentNums)) {
                lowest.push(height);
            }
        }
    }
    return getRiskLevelsSum(lowest);
}

const Location = (row, col, val) => ({ row, col, val });

const getBasin = (row, col, arr) => {
    const res = [Location(row, col, arr[row][col])];
    const addLocation = (row, col, val) => {
        const location = Location(row, col, val);
        const hasLocation = res.filter(r => r.row === location.row && r.col === location.col && r.val === location.val);
        if (hasLocation.length < 1) {
            res.push(location);
        }
    }
    const recurse = (row, col, arr, currentNum) => {
        const adjacentNums = getAdjacent(row, col, arr);
        for (let i = 0; i < adjacentNums.length; i++) {
            const num = adjacentNums[i];
            // console.log("row:",row, "\ncol",col,"\ni:",i, "\ncurrentNum:", currentNum, "\nadjacent:", adjacentNums);
            if (num === null || num === undefined) {
                continue;
            }
            if (num === currentNum + 1 && num < 9) {
                if (i === 0) {
                    addLocation(row - 1, col, num)
                    recurse(row - 1, col, arr, num);

                } else if (i === 1) {
                    addLocation(row + 1, col, num)
                    recurse(row + 1, col, arr, num);

                } else if (i === 2) {
                    addLocation(row, col - 1, num)
                    recurse(row, col - 1, arr, num);

                } else if (i === 3) {
                    addLocation(row, col + 1, num)
                    recurse(row, col + 1, arr, num);
                }
            }
        }
    }
    recurse(row, col, arr, arr[row][col]);
    return res.map(({ val }) => val);
}

const solveP2 = (arr) => {
    const LowPoint = (row, col, val) => ({ row, col, val });
    const lowest = [];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            const adjacentNums = getAdjacent(row, col, arr);
            const height = arr[row][col];
            if (isLowest(height, adjacentNums)) {
                lowest.push(LowPoint(row, col, height));
            }
        }
    }
    return lowest
        .map(({ row, col }) => getBasin(row, col, arr).length)
        .sort((a, b) => a - b)
        .reverse()
        .slice(0, 3)
        .reduce((product, num) => product *= num)

}
module.exports = { parse, getAdjacent, isLowest, getRiskLevelsSum, solveP1, getBasin, solveP2 };