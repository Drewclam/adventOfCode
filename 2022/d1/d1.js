const input = require('./input');

let temp = 0;
const getAnswer = (input) => {
  const sums = input.split('\n').reduce((sums, str, idx, arr) => {
    if (str.trim() === '') {
      sums.push(temp);
      temp = 0;
    } else if (idx === arr.length - 1) {
      temp += Number(str.trim());
      sums.push(temp);
    } else {
      temp += Number(str.trim());
    }

    return sums;
  }, []);
  return sums.sort((a, b) => a - b).reverse()[0];
};

const getAnswer2 = (input) => {
  const [x, y, z, ...rest] = input
    .split('\n')
    .reduce((sums, str, idx, arr) => {
      if (str.trim() === '') {
        sums.push(temp);
        temp = 0;
      } else if (idx === arr.length - 1) {
        temp += Number(str.trim());
        sums.push(temp);
      } else {
        temp += Number(str.trim());
      }

      return sums;
    }, [])
    .sort((a, b) => a - b)
    .reverse();
  // 206643
  return x + y + z;
};

console.log(getAnswer2(input));
