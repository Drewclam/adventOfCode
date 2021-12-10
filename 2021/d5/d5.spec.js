const { sample, input } = require('./input');
const { parse, getAdjacent, isLowest, getRiskLevelsSum, solveP1, getBasin, solveP2 } = require('./d5');

const parsedSample = parse(sample);
const parsedInput = parse(input);

describe('d5', () => {
    it('parses into array of arrays', () => {
        expect(parsedSample).toEqual([
            [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
            [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
            [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
            [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
            [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
        ]);
    });

    it('gets the adjacent numbers', () => {
        // corners
        expect(getAdjacent(0, 0, parsedSample)).toEqual([null, 3, null, 1]);
        expect(getAdjacent(0, 9, parsedSample)).toEqual([null, 1, 1, null]);
        expect(getAdjacent(4, 0, parsedSample)).toEqual([8, null, null, 8]);
        expect(getAdjacent(4, 9, parsedSample)).toEqual([9, null, 7, null]);
        // edges
        expect(getAdjacent(0, 4, parsedSample)).toEqual([null, 8, 9, 4]);
        expect(getAdjacent(2, 9, parsedSample)).toEqual([1, 9, 9, null]);
        expect(getAdjacent(4, 4, parsedSample)).toEqual([8, null, 9, 6]);
        expect(getAdjacent(2, 0, parsedSample)).toEqual([3, 8, null, 8]);
        // normal
        expect(getAdjacent(1, 1, parsedSample)).toEqual([1, 8, 3, 8]);
        expect(getAdjacent(3, 4, parsedSample)).toEqual([7, 9, 7, 9]);
    });

    it('checks if lowest', () => {
        expect(isLowest(1, [9, 9, 2, null])).toBe(true);
        expect(isLowest(5, [8, 8, 6, 6])).toBe(true);
        expect(isLowest(0, [null, 1, 1, null])).toBe(true);
        expect(isLowest(5, [6, null, 6, 6])).toBe(true);
        expect(isLowest(2, [1, 3, null, undefined])).toBe(false);
        expect(isLowest(2, [4, 3, null, undefined])).toBe(true);
    });

    it('gets sum of risk levels', () => {
        expect(getRiskLevelsSum([1, 0, 5, 5])).toBe(15);
    })

    it('solves part 1', () => {
        expect(solveP1(parsedSample)).toBe(15);
        expect(solveP1(parsedInput)).toBe(588);
    })

    it('gets the basin for a height', () => {
        expect(getBasin(0, 1, [[1, 2, 3, 4, 5]])).toEqual([2, 3, 4, 5]);
        expect(getBasin(0, 4, [[5,4,3,2,1]])).toEqual([1,2,3,4,5]);
        expect(getBasin(0, 0, [
            [3, 4, 3, 2, 1],
            [4, 1, 2, 3, 4]
        ])).toEqual([3, 4, 4]);
        expect(getBasin(1, 2, [
            [3, 5, 4, 2, 1],
            [4, 1, 3, 3, 4]
        ])).toEqual([3, 4, 5]);
        expect(getBasin(1, 2, [
            [3, 5, 4, 2, 1],
            [4, 1, 1, 2, 4],
            [4, 3, 4, 3, 4]
        ])).toEqual([1, 2, 3, 4, 4]);
        expect(getBasin(1, 2, [
            [3, 5, 4, 2, 1],
            [4, 1, 1, 2, 4],
            [4, 3, 4, 3, 4]
        ])).toEqual([1, 2, 3, 4, 4]);

        expect(getBasin(0, 1, parsedSample)).toEqual([1, 2, 3]);
        expect(getBasin(0, 9, parsedSample)).toEqual([0, 1, 2, 2, 1, 2, 3, 4 , 4]);
        expect(getBasin(2, 2, parsedSample)).toEqual([5, 6, 7, 8, 8, 8, 7, 8, 6, 7, 8 , 8,7, 8]);
        expect(getBasin(4, 6, parsedSample)).toEqual([5, 6, 7, 8, 8, 6, 6,7 ,8]);
    })

    it('solves part 2', () => {
        expect(solveP2(parsedSample)).toBe(1134);
        expect(solveP2(parsedInput)).toBe(1134);
    })
})