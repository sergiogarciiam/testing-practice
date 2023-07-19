import { reverseString } from "../functions";

test("reverse string one word", () => {
  const result = reverseString("hello");
  expect(result).toEqual("olleh");
});

test("reverse string two words", () => {
  const result = reverseString("hello world");
  expect(result).toEqual("dlrow olleh");
});

test("reverse string null", () => {
  const result = reverseString(null);
  expect(result).toEqual(null);
});
