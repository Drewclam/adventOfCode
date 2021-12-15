const { sample, input } = require("./input");
const {
  parseInsertion,
  parse,
  findRule,
  executeSteps,
  executeStep,
  getMostCommon,
  getLeastCommon,
} = require("./d14");

describe("d14", () => {
  it("parses input", () => {
    expect(parseInsertion(`AB -> C`)).toEqual({
      first: "A",
      second: "B",
      insert: "C",
    });
    expect(
      parse(`NNCB
    
    CH -> B
    HH -> N`)
    ).toStrictEqual({
      template: "NNCB",
      rules: [
        {
          first: "C",
          second: "H",
          insert: "B",
        },
        {
          first: "H",
          second: "H",
          insert: "N",
        },
      ],
    });
  });

  it("finds the right rule", () => {
    const { template, rules } = parse(sample);
    expect(findRule(rules, `${template[0]}${template[1]}`)).toEqual({
      first: "N",
      second: "N",
      insert: "C",
    });
    expect(findRule(rules, `${template[1]}${template[2]}`)).toEqual({
      first: "N",
      second: "C",
      insert: "B",
    });
    expect(findRule(rules, `${template[2]}${template[3]}`)).toEqual({
      first: "C",
      second: "B",
      insert: "H",
    });
  });

  it("executes the step", () => {
    const { template, rules } = parse(sample);
    // NNCB
    // NN -> C
    // NCNCB
    // NC -> B
    // NCNBCB
    // CB -> H
    // NCNBCHB
    expect(executeStep(template, rules)).toEqual("NCNBCHB");
    expect(executeStep("NCNBCHB", rules)).toEqual("NBCCNBBBCBHCB");
    expect(executeStep("NBCCNBBBCBHCB", rules)).toEqual(
      "NBBBCNCCNBBNBNBBCHBHHBCHB"
    );
    expect(executeStep("NBBBCNCCNBBNBNBBCHBHHBCHB", rules)).toEqual(
      "NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB"
    );
  });

  it("executes steps", () => {
    const { template, rules } = parse(sample);
    expect(executeSteps(template, rules, 1)).toEqual("NCNBCHB");
    expect(executeSteps(template, rules, 2)).toEqual("NBCCNBBBCBHCB");
    expect(executeSteps(template, rules, 3)).toEqual(
      "NBBBCNCCNBBNBNBBCHBHHBCHB"
    );
    expect(executeSteps(template, rules, 4)).toEqual(
      "NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB"
    );
  });

  it("gets the most common occurence", () => {
    const { template, rules } = parse(sample);
    expect(getMostCommon(executeSteps(template, rules, 10))).toEqual({
      key: "B",
      value: 1749,
    });
  });

  it("gets the least common occurence", () => {
    const { template, rules } = parse(sample);
    expect(getLeastCommon(executeSteps(template, rules, 10))).toEqual({
      key: "H",
      value: 161,
    });
  });

  it("solves part 1 sample", () => {
    const { template, rules } = parse(sample);
    const res = executeSteps(template, rules, 10);
    expect(getMostCommon(res).value - getLeastCommon(res).value).toEqual(1588);
  });

  it("solves part 1", () => {
    const { template, rules } = parse(input);
    const res = executeSteps(template, rules, 10);
    expect(getMostCommon(res).value - getLeastCommon(res).value).toEqual(2360);
  });

  it("solves part 2 sample", () => {
    const { template, rules } = parse(sample);
    // const res = executeSteps(template, rules, 40);
    // expect(getMostCommon(res).value - getLeastCommon(res).value).toEqual(2188189693529);
  });
});
