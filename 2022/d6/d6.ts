const ds1 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'; //7
const ds2 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'; //5
const ds3 = 'nppdvjthqldpwncqszvftbrmjlhg'; //6
const ds4 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'; //10
const ds5 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'; //11
import input from './input';

const updateBuffer = (buffer: string, char: string) => {
  if (buffer.length < 14) {
    return `${buffer}${char}`;
  }
  return `${buffer.substring(1, buffer.length)}${char}`;
};
const checkPacket = (buffer: string, char: string) => {
  if (buffer.length < 4) {
    return false;
  }

  for (let i = 0; i < buffer.length; i++) {
    const filteredBuffer = buffer.split('').filter((_, idx) => idx !== i);
    const charToCheck = buffer[i];
    if (filteredBuffer.includes(charToCheck)) {
      return false;
    }
  }
  return true;
};
const checkMessage = (buffer: string, char: string) => {
  if (buffer.length < 14) {
    return false;
  }

  for (let i = 0; i < buffer.length; i++) {
    const filteredBuffer = buffer.split('').filter((_, idx) => idx !== i);
    const charToCheck = buffer[i];
    if (filteredBuffer.includes(charToCheck)) {
      return false;
    }
  }
  return true;
};
const findStartPacketCount = (input: string) => {
  let buffer = '';
  for (let i = 0; i < input.length; i++) {
    buffer = updateBuffer(buffer, input[i]);
    console.log({ buffer });
    if (checkMessage(buffer, input[i])) {
      console.log(i + 1);
      return i + 1;
    }
  }
};

findStartPacketCount(input);
