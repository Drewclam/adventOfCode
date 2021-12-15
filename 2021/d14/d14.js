const parseInsertion = (rule) => {
  const [polymers, insert] = rule.split("->").map((str) => str.trim());
  return {
    first: polymers[0],
    second: polymers[1],
    insert,
  };
};

const parse = (input) => {
  const [template, ...insertions] = input
    .split(/[\n\r]+/g)
    .map((str) => str.trim())
    .filter((str) => !!str.length);
  return { template, rules: insertions.map(parseInsertion) };
};

const findRule = (rules, pair) =>
  rules.find(({ first, second }) => pair[0] === first && pair[1] === second);

const executeStep = (template, rules) => {
  let res = template[0];
  template.split("").forEach((char, idx) => {
    if (idx !== 0) {
      const pair = `${template[idx - 1]}${char}`;
      const rule = findRule(rules, pair);
      res += `${rule.insert}${char}`;
    }
  });
  return res;
};

const executeSteps = (template, rules, steps) => {
  let res = executeStep(template, rules);
  for (let i = 1; i < steps; i++) {
    res = executeStep(res, rules);
  }
  return res;
};

const getMostCommon = (template) => {
  const hashMap = template.split("").reduce((hashMap, char) => {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char] += 1;
    }
    return hashMap;
  }, {});
  const key = Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a])[0];
  return { key, value: hashMap[key] };
};

const getLeastCommon = (template) => {
  const hashMap = template.split("").reduce((hashMap, char) => {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char] += 1;
    }
    return hashMap;
  }, {});
  const key = Object.keys(hashMap).sort((a, b) => hashMap[a] - hashMap[b])[0];
  return { key, value: hashMap[key] };
};

module.exports = {
  parse,
  parseInsertion,
  findRule,
  executeStep,
  executeSteps,
  getMostCommon,
  getLeastCommon,
};
