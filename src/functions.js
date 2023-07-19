function capitalize(string) {
  if (string === null) return string;

  const upperCaseLetter = string.slice(0, 1).toUpperCase();
  const result = upperCaseLetter + string.slice(1);

  return result;
}

function reverseString(string) {
  if (string === null) return string;

  const stringArray = string.split("").reverse();

  return stringArray.join("");
}

module.exports = {
  capitalize,
  reverseString,
};
