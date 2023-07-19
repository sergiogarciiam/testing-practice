import analyzeArray from "../analyzeArray";

test("analyzeArray length 0", () => {
  const result = analyzeArray([]);
  const expected = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  expect(result).toEqual(expected);
});

test("analyzeArray length 1", () => {
  const result = analyzeArray([1]);
  const expected = {
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  };

  expect(result).toEqual(expected);
});

test("analyzeArray length 6", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(result).toEqual(expected);
});

test("analyzeArray null", () => {
  const result = analyzeArray(null);
  expect(result).toEqual("Invalid input: Array cannot be null");
});

test("analyzeArray as string", () => {
  const result = analyzeArray("183426");
  expect(result).toEqual("Invalid input: Not an array");
});

test("analyzeArray length 6 with strings", () => {
  const result = analyzeArray([1, 8, "3", 4, 2, 6]);
  expect(result).toEqual("Invalid input: Array contains non-numeric values");
});
