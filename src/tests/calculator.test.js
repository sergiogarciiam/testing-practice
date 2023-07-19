import Calculator from "../calculator";

const calculator = new Calculator();

// ADD ------------
test("add number + number", () => {
  const result = calculator.add(2, 2);
  expect(result).toBe(4);
});

test("add number + null", () => {
  const result = calculator.add(2, null);
  expect(result).toBe(null);
});

test("add null + number", () => {
  const result = calculator.add(null, 2);
  expect(result).toBe(null);
});

test("add null + null", () => {
  const result = calculator.add(null, null);
  expect(result).toBe(null);
});

// SUBTRACT ------------
test("subtract number - number", () => {
  const result = calculator.subtract(2, 2);
  expect(result).toBe(0);
});

test("subtract number - null", () => {
  const result = calculator.subtract(2, null);
  expect(result).toBe(null);
});

test("subtract null - number", () => {
  const result = calculator.subtract(null, 2);
  expect(result).toBe(null);
});

test("subtract null - null", () => {
  const result = calculator.subtract(null, null);
  expect(result).toBe(null);
});

// MULTIPLY ------------
test("multiply number * number", () => {
  const result = calculator.multiply(2, 2);
  expect(result).toBe(4);
});

test("multiply number * null", () => {
  const result = calculator.multiply(2, null);
  expect(result).toBe(null);
});

test("multiply null * number", () => {
  const result = calculator.multiply(null, 2);
  expect(result).toBe(null);
});

test("multiply null * null", () => {
  const result = calculator.multiply(null, null);
  expect(result).toBe(null);
});

// DIVIDE ------------
test("divide number / number", () => {
  const result = calculator.divide(2, 2);
  expect(result).toBe(1);
});

test("divide number / 0", () => {
  const result = calculator.divide(2, 0);
  expect(result).toBe(Infinity);
});

test("divide 0 / number", () => {
  const result = calculator.divide(0, 2);
  expect(result).toBe(0);
});

test("divide 0 / 0", () => {
  const result = calculator.divide(0, 0);
  expect(result).toBe(Infinity);
});

test("divide number / null", () => {
  const result = calculator.divide(2, null);
  expect(result).toBe(null);
});

test("divide null / number", () => {
  const result = calculator.divide(null, 2);
  expect(result).toBe(null);
});

test("divide null / null", () => {
  const result = calculator.divide(null, null);
  expect(result).toBe(null);
});
