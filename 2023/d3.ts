const ex1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const test1 = `467..114..
...*......`

type MemEntry = {
    type: 'value' | 'symbol';
    data: string;
    start: number;
    end: number;
}
let res = [];
const getPartNumbers = (arrs: string[][]) => {

};

const parse = (input: string) => {
    input.split('\n').forEach(line => {
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const isNumber = !Number.isNaN(parseInt(char));
            const isSymbol = !isNumber && char !== '.'

            if (isSymbol) {

            }
        }
    })
}
parse(test1)
console.log({ res })