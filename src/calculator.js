export default class Calculator {
  add(value1, value2) {
    if (value1 === null || value2 === null) return null;
    return value1 + value2;
  }

  subtract(value1, value2) {
    if (value1 === null || value2 === null) return null;
    return value1 - value2;
  }

  multiply(value1, value2) {
    if (value1 === null || value2 === null) return null;
    return value1 * value2;
  }

  divide(value1, value2) {
    if (value1 === null || value2 === null) return null;
    if (value2 === 0) return Infinity;

    return value1 / value2;
  }
}
