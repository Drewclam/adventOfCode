const { parse, checkBingo } = require('./d4');
const { sample, input } = require('./input');

describe('d4', () => {
    it('parses the input', () => {
        expect(parse(['1,2,3', '', '1 2 3', '', '3 2 1'])).toEqual([[1, 2, 3], [[1, 2, 3]], [[3, 2, 1]]]);
        expect(parse(['7,8,7', '', '1 2 3', '3 2 1', '', '4 4 4', '5 5 5'])).toEqual([[7, 8, 7], [[1, 2, 3], [3, 2, 1]], [[4, 4, 4], [5, 5, 5]]]);
        expect(parse([
            '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
            '',
            '22 13 17 11 0',
            '8 2 23 4 24',
            '21 9 14 16 7',
            '6 10 3 18 5',
            '1 12 20 15 19',
            '',
            '3 15  0  2 22',
            '9 18 13 17  5',
            '19  8  7 25 23',
            '20 11 10 24  4',
            '14 21 16 12  6',
            '',
            '14 21 17 24  4',
            '10 16 15  9 19',
            '18  8 23 26 20',
            '22 11 13  6  5',
            '2  0 12  3  7'
        ])).toEqual([
            [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1],
            [
                [22, 13, 17, 11, 0],
                [8, 2, 23, 4, 24],
                [21, 9, 14, 16, 7],
                [6, 10, 3, 18, 5],
                [1, 12, 20, 15, 19]
            ],
            [
                [3, 15, 0, 0, 0, 2, 22],
                [9, 18, 13, 17, 0, 5],
                [19, 0, 8, 0, 7, 25, 23],
                [20, 11, 10, 24, 0, 4],
                [14, 21, 16, 12, 0, 6]],
            [
                [14, 21, 17, 24, 0, 4],
                [10, 16, 15, 0, 9, 19],
                [18, 0, 8, 23, 26, 20],
                [22, 11, 13, 0, 6, 0, 5],
                [2, 0, 0, 12, 0, 3, 0, 7]
            ]
        ])
    })

    it('checks bingo on a board', () => {
        const [numbers, ...boards] = parse(sample.split('\n'));
        expect(checkBingo(numbers.slice(0, 5),boards[0])).toEqual(false);
        // expect(checkBingo(numbers.slice(0, 5),boards[1])).toEqual(false);
        // expect(checkBingo(numbers.slice(0, 5),boards[2])).toEqual(false);

        expect(checkBingo(numbers.slice(0, 11),boards[0])).toEqual(false);
        // expect(checkBingo(numbers.slice(0, 11),boards[1])).toEqual(false);
        // expect(checkBingo(numbers.slice(0, 11),boards[2])).toEqual(false);

        expect(checkBingo(numbers,boards[0])).toEqual(false);
        // expect(checkBingo(numbers,boards[1])).toEqual(false);
        // expect(checkBingo(numbers,boards[2])).toEqual(true);
    })
})