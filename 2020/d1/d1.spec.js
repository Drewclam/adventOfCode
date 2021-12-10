const { findEntriesForSum, findEntriesForSum2 } = require("./d1");
const { parseInput } = require("../../utils/parseInput");

describe("d1", () => {
  it("should solve example 1", () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(findEntriesForSum(input, 2020)).toEqual([1721, 299]);
  });

  it("should solve part 1", () => {
    const input = parseInput(require("./d1.input"));
    const nums = [1073, 947];
    const answer = 1016131;
    expect(findEntriesForSum(input, 2020)).toEqual(nums);
    expect(nums[0] * nums[1]).toEqual(answer);
  });

  it("should solve example 2", () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    const answer = 241861950;
    const nums = [979, 366, 675];
    expect(findEntriesForSum2(input, 2020)).toEqual(nums);
    expect(nums[0] * nums[1] * nums[2]).toEqual(answer);
  });

  it("should solve part 1", () => {
    const input = parseInput(require("./d1.input"));
    const nums = [911, 618, 491];
    const answer = 276432018;
    expect(findEntriesForSum2(input, 2020)).toEqual(nums);
    expect(nums[0] * nums[1] * nums[2]).toEqual(answer);
  });
});
