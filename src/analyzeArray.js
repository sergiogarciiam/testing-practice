function analyzeArray(inputArray) {
  if (inputArray === null) {
    return "Invalid input: Array cannot be null";
  }

  if (!Array.isArray(inputArray)) {
    return "Invalid input: Not an array";
  }

  if (inputArray.length === 0) {
    return getEmptyObject();
  }

  if (containsNonNumericValues(inputArray)) {
    return "Invalid input: Array contains non-numeric values";
  }

  return getArrayObject(inputArray);
}

function getEmptyObject() {
  return {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };
}

function getArrayObject(inputArray) {
  const min = Math.min(...inputArray);
  const max = Math.max(...inputArray);
  const length = inputArray.length;
  const sum = inputArray.reduce(
    (accumulator, element) => accumulator + element,
    0
  );
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}

function containsNonNumericValues(inputArray) {
  const filteredArray = inputArray.filter((value) => typeof value === "number");
  return filteredArray.length !== inputArray.length;
}

export default analyzeArray;
