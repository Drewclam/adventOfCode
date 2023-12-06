import * as fs from 'fs';

export const parseFile = (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
export const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)