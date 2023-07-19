import caesarCipher from "../caesarCipher";

test("caesarCipher shift 0", () => {
  const result = caesarCipher("abcdefghijklmnopqrstuvwxyz", 0);
  expect(result).toEqual("abcdefghijklmnopqrstuvwxyz");
});

test("caesarCipher shift 1", () => {
  const result = caesarCipher("abcdefghijklmnopqrstuvwxyz", 1);
  expect(result).toEqual("bcdefghijklmnopqrstuvwxyza");
});

test("caesarCipher shift 2", () => {
  const result = caesarCipher("abcdefghijklmnopqrstuvwxyz", 2);
  expect(result).toEqual("cdefghijklmnopqrstuvwxyzab");
});

test("caesarCipher shift 3 in uppercase", () => {
  const result = caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
  expect(result).toEqual("DEFGHIJKLMNOPQRSTUVWXYZABC");
});

test("caesarCipher shift 30", () => {
  const result = caesarCipher("abcdefghijklmnopqrstuvwxyz", 2);
  expect(result).toEqual("cdefghijklmnopqrstuvwxyzab");
});

test("caesarCipher shift 5 with punctuation and ñ", () => {
  const result = caesarCipher("abcd:efghi.jklm+nopqr-stuvwx_yzñ", 5);
  expect(result).toEqual("fghi:jklmn.opqr+stuvw-xyzabc_deñ");
});

test("caesarCipher shift 15 hello world with space", () => {
  const result = caesarCipher("Hello World", 15);
  expect(result).toEqual("Wtaad Ldgas");
});
