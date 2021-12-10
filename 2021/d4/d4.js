let chunk = [];
const parse = input => input.reduce((res, current, idx, arr) => {
    const isSeparator = current === '';
    const isLast = idx === arr.length - 1;
    const isFirst = idx === 0;

    if (isFirst) {
        chunk = current.split(',').map(Number);
    }

    if (!isSeparator && !isFirst) {
        const currentChunk = current.split(' ').map(Number);
        chunk.push(currentChunk);
    }

    if (isSeparator || isLast) {
        res.push(chunk);
        chunk = [];
    }

    return res;
}, []);

const checkBingo = (numbers, board) => {
    
}

const getBingo = (numbers, ...boards) => {

}

module.exports = { parse, checkBingo };