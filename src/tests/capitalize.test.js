import { capitalize } from "../functions";

test("capitalize normal", () => {
  const result = capitalize("hello");
  expect(result).toEqual("Hello");
});

test("capitalize null", () => {
  const result = capitalize(null);
  expect(result).toEqual(null);
});
