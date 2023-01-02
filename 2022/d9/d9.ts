import { parseFile } from 'utils';

type Position = {
  x: number;
  y: number;
};

const parseInstruction = (input: string): [string, number] => {
  const [direction, val] = input.split(' ');
  return [direction, Number(val)];
};

const shouldUpdateTail = (head: Position, tail: Position) =>
  Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1;

const update = (head: Position, tail: Position, newHeadPos: Position) => {
  if (shouldUpdateTail(newHeadPos, tail)) {
    if (newHeadPos.x === tail.x || newHeadPos.y === tail.y) {
      tail.x = head.x;
      tail.y = head.y;
    } else {
      if (newHeadPos.y > tail.y && newHeadPos.x > tail.x) {
        tail.x += 1;
        tail.y += 1;
      } else if (newHeadPos.y > tail.y && newHeadPos.x < tail.x) {
        tail.x -= 1;
        tail.y += 1;
      } else if (newHeadPos.y < tail.y && newHeadPos.x > tail.x) {
        tail.x += 1;
        tail.y -= 1;
      } else {
        tail.x -= 1;
        tail.y -= 1;
      }
    }
  }
  head.x = newHeadPos.x;
  head.y = newHeadPos.y;
};

const move = (direction: string, value: number, head: Position, tail: Position, visited: any) => {
  for (let i = 0; i < value; i++) {
    switch (direction) {
      case 'R':
        update(head, tail, { ...head, x: head.x + 1 });
        break;
      case 'D':
        update(head, tail, { ...head, y: head.y - 1 });
        break;
      case 'L':
        update(head, tail, { ...head, x: head.x - 1 });
        break;
      case 'U':
        update(head, tail, { ...head, y: head.y + 1 });
        break;
      default:
        break;
    }
    updateVisited(visited, tail);
  }
  // console.log({ head, tail });
};

const updateVisited = (visited: Position[], tail: Position) => {
  const isVisited = visited.some((pos) => tail.x === pos.x && pos.y === tail.y);
  if (!isVisited) {
    visited.push({ ...tail });
  }
};

parseFile('input.txt').then((content) => {
  const head: Position = { x: 0, y: 0 };
  const tail: Position = { x: 0, y: 0 };
  const visited = [{ ...tail }];

  content.split('\n').forEach((line) => {
    const [direction, value] = parseInstruction(line);
    move(direction, value, head, tail, visited);
  });
  console.log(visited.length);
});
