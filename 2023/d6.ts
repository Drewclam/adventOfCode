import { product } from "utils";

const input = `Time:        45     97     72     95
Distance:   305   1062   1110   1695`
const input2 = `Time:        45977295
Distance:   305106211101695`

const ex1 = `Time:      715   30
Distance:  9  40  200`

const test = `Time:      71530
Distance:  940200`

const getNumberOfWins = (time: number, distance: number) => {
    let wins = 0;
    let rangeStarted;
    for (let i = 0; i < time; i++) {
        if ((time - i) * i > distance) {
            wins += 1;
            if (!rangeStarted) {
                rangeStarted = true;
            }
        } else if (rangeStarted) {
            return wins;
        }
    }
    return wins;
}

const parse = (input: string) => {
    const [lineTime, lineDistance] = input.split('\n');
    const times = lineTime.split(':')[1].split(' ').filter(Boolean)
    const distances = lineDistance.split(':')[1].split(' ').filter(Boolean)

    let res = [];
    times.forEach((time, i) => {
        const wins = getNumberOfWins(parseInt(time), parseInt(distances[i]))
        console.log({ time, distance: distances[i], wins })
        res.push(wins);
    })
    console.log(product(res))
}

parse(input2)