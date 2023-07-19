const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shift) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    result += getNewLetter(string[index], shift);
  }
  return result;
}

function getNewLetter(letter, shift) {
  const isUpperCase = letter === letter.toUpperCase();
  letter = letter.toLowerCase();

  if (!ALPHABET.includes(letter)) return letter;

  let newLetterIndex = ALPHABET.indexOf(letter) + shift;

  if (newLetterIndex >= ALPHABET.length)
    newLetterIndex = newLetterIndex - ALPHABET.length;

  const shiftedLetter = ALPHABET[newLetterIndex];
  return isUpperCase ? shiftedLetter.toUpperCase() : shiftedLetter;
}

export default caesarCipher;
