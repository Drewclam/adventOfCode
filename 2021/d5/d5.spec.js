const { sample, input } = require('./input');
const { parse, getAdjacent, isLowest, getRiskLevelsSum, solveP1 } = require('./d5');

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
        expect(getAdjacent(0, 0, parsedSample)).toContain(1, 3);
        expect(getAdjacent(0, 0, parsedSample)).toHaveLength(2);

        expect(getAdjacent(0, 9, parsedSample)).toContain(1, 1);
        expect(getAdjacent(0, 9, parsedSample)).toHaveLength(2);

        expect(getAdjacent(4, 0, parsedSample)).toContain(8, 8);
        expect(getAdjacent(4, 0, parsedSample)).toHaveLength(2);

        expect(getAdjacent(4, 9, parsedSample)).toContain(9, 7);
        expect(getAdjacent(4, 9, parsedSample)).toHaveLength(2);

        // edges
        expect(getAdjacent(0, 4, parsedSample)).toContain(9, 8, 4);
        expect(getAdjacent(0, 4, parsedSample)).toHaveLength(3);

        expect(getAdjacent(2, 9, parsedSample)).toContain(1, 9, 9);
        expect(getAdjacent(2, 9, parsedSample)).toHaveLength(3);

        expect(getAdjacent(4, 4, parsedSample)).toContain(9, 8, 6);
        expect(getAdjacent(4, 4, parsedSample)).toHaveLength(3);

        expect(getAdjacent(2, 0, parsedSample)).toContain(3, 8, 8);
        expect(getAdjacent(2, 0, parsedSample)).toHaveLength(3);

        // normal
        expect(getAdjacent(1, 1, parsedSample)).toContain(1, 3, 8, 8);
        expect(getAdjacent(1, 1, parsedSample)).toHaveLength(4);

        expect(getAdjacent(3, 4, parsedSample)).toContain(7, 7, 9, 9);
        expect(getAdjacent(3, 4, parsedSample)).toHaveLength(4);
    });

    it('checks if lowest', () => {
        expect(isLowest(1, [9, 9, 2])).toBe(true);
        expect(isLowest(5, [8, 8, 6, 6])).toBe(true);
        expect(isLowest(0, [1, 1])).toBe(true);
        expect(isLowest(5, [6, 6, 6])).toBe(true);
        expect(isLowest(2, [1, 3])).toBe(false);
    });

    it('gets sum of risk levels', () => {
        expect(getRiskLevelsSum([1, 0, 5, 5])).toBe(15);
    })

    it('solves part 1', () => {
        expect(solveP1(parsedSample)).toBe(15);
        expect(solveP1(parsedInput)).toBe(588);
    })
})