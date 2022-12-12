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

const ROOT_ID = '/';
const COMMAND_ID = '$';
const CREATE_DIR = 'dir';
const LIST = 'ls';
const CHANGE_DIRECTORY = 'cd';
enum DIRECTORY_TYPE {
  FILE,
  DIRECTORY,
}
interface Node {
  id: string;
  type: DIRECTORY_TYPE;
  size: number;
  children: Node[];
  parent: Node;
}

const parseInput = (input: string) => input.split('\n');

const isDirectory = (node: Node) => node.type === DIRECTORY_TYPE.DIRECTORY;
const isFile = (node: Node) => node.type === DIRECTORY_TYPE.FILE;

const getMinDiskSpaceNeeded = (root: Node) => 30000000 - (70000000 - root.size);

const updateDirectorySizes = (node: Node, size: number) => {
  if (isDirectory(node)) {
    node.size += size;
  } else {
    throw new Error(`updateDirectorySize was not called on directory/root node: ${node.id}`);
  }

  if (!!node.parent) {
    updateDirectorySizes(node.parent, size);
  }
};

const addNode = (node: Node, id: string, size: number, parent: Node) => {
  const newNode = buildNode(id, parent, size);
  node.children.push(newNode);
  newNode.parent = node;

  /* When a file is added, update parent directories. */
  if (isFile(newNode)) {
    updateDirectorySizes(node, newNode.size);
  }
};
const buildNode = (id: string, parent?: Node, size = 0): Node => ({
  id,
  size,
  children: [],
  parent,
  type: size === 0 ? DIRECTORY_TYPE.DIRECTORY : DIRECTORY_TYPE.FILE,
});

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

const getDirectoriesSum = (node: Node, sum = 0) => {
  if (node.children.length < 1) {
    return 0;
  }
  if (node.size <= 100000) {
    sum += node.size;
  }

  node.children.forEach((child) => {
    if (isDirectory(child)) {
      sum += getDirectoriesSum(child);
    }
  });
  return sum;
};
const getDirectoryToDelete = (node: Node, min: number, size?: number) => {
  if (isDirectory(node) && node.size >= min) {
    size = node.size;
  }
  if (!node.children.some(isDirectory)) {
    return size;
  }

  node.children.forEach((child) => {
    if (isDirectory(child)) {
      size = getDirectoryToDelete(child, min, size);
    }
  });
  return size;
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
  });
  const sum = getDirectoriesSum(root);
  const dirToDelete = getDirectoryToDelete(root, getMinDiskSpaceNeeded(root));
  console.log({ sum, dirToDelete });
};

getAnswer(input);
