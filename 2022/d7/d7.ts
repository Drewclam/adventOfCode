import input from './input';
const sampleInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

interface Node {
  id: string;
  size: number;
  children: Node[];
  parent: Node;
}
const ROOT_ID = '/';
const COMMAND_ID = '$';
const CREATE_DIR = 'dir';
const LIST = 'ls';
const CHANGE_DIRECTORY = 'cd';

const parseInput = (input: string) => input.split('\n');

const buildNode = (id: string, parent?: Node, size = 0): Node => ({
  id,
  size,
  children: [],
  parent,
});
const isRootNode = (node: Node) => node.id === ROOT_ID || node.parent === undefined;
const addNode = (node: Node, id: string, size: number, parent: Node) => {
  const newNode = buildNode(id, parent, size);
  node.children.push(newNode);
  newNode.parent = node;
};

const changeDirectory = (root: Node, currentDir: Node, dirId: string) => {
  if (dirId === ROOT_ID) {
    return root;
  }

  if (dirId === '..') {
    return currentDir.parent;
  }

  return currentDir.children.find(({ id }) => id === dirId);
};
const executeCommand = (
  rawCommand: string,
  node: Node | undefined,
  root: Node | undefined,
): Node => {
  const parts = rawCommand.split(' ');

  if (parts[0] === COMMAND_ID) {
    const commandName = parts[1];
    if (commandName === CHANGE_DIRECTORY) {
      const directoryName = parts[2];
      if (!node) {
        return buildNode(directoryName);
      }
      return changeDirectory(root, node, directoryName);
    }
    if (commandName === LIST) {
      return node;
    }
  }

  if (parts[0] === CREATE_DIR) {
    const directoryName = parts[1];
    addNode(node, directoryName, 0, node.parent);
    return node;
  }

  if (Number.isInteger(Number(parts[0]))) {
    const size = Number(parts[0]);
    const fileName = parts[1];
    addNode(node, fileName, size, node.parent);
    return node;
  }

  throw new Error('Unknown command!');
};

const getAnswer = (input: string) => {
  const commands = parseInput(input);
  let workingDir: Node;
  let root: Node;

  commands.forEach((rawCommand) => {
    workingDir = executeCommand(rawCommand, workingDir, root);
    if (!root) {
      root = workingDir;
    }
    console.log({ rawCommand, pointer: workingDir });
  });
};

getAnswer(sampleInput);
