export default function reverseString(string) {
  if (string === null) return string;

  const stringArray = string.split("").reverse();

  return stringArray.join("");
}
