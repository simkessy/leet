const reverseWords = require("./ReverseSentences");

test("Reverse function exists", () => {
  expect(reverseWords).toBeDefined();
});

test('Reverse [" "," "]', () => {
  expect(reverseWords([" ", " "])).toEqual([" ", " "]);
});

test(`Reverse ["b"," "," ","a"]`, () => {
  expect(reverseWords(["a", " ", " ", "b"])).toEqual(["b", " ", " ", "a"]);
});

test(`Reverse ["h","e","l","l","o"]`, () => {
  expect(reverseWords(["h", "e", "l", "l", "o"])).toEqual([
    "h",
    "e",
    "l",
    "l",
    "o"
  ]);
});

test(`Reverse ["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]`, () => {
  expect(
    reverseWords([
      "p",
      "e",
      "r",
      "f",
      "e",
      "c",
      "t",
      " ",
      "m",
      "a",
      "k",
      "e",
      "s",
      " ",
      "p",
      "r",
      "a",
      "c",
      "t",
      "i",
      "c",
      "e"
    ])
  ).toEqual([
    "p",
    "r",
    "a",
    "c",
    "t",
    "i",
    "c",
    "e",
    " ",
    "m",
    "a",
    "k",
    "e",
    "s",
    " ",
    "p",
    "e",
    "r",
    "f",
    "e",
    "c",
    "t"
  ]);
});

test(`Reverse ["y","o","u"," ","w","i","t","h"," ","b","e"," ","f","o","r","c","e"," ","t","h","e"," ","m","a","y"]`, () => {
  expect(
    reverseWords([
      "g",
      "r",
      "e",
      "a",
      "t",
      "e",
      "s",
      "t",
      " ",
      "n",
      "a",
      "m",
      "e",
      " ",
      "f",
      "i",
      "r",
      "s",
      "t",
      " ",
      "e",
      "v",
      "e",
      "r",
      " ",
      "n",
      "a",
      "m",
      "e",
      " ",
      "l",
      "a",
      "s",
      "t"
    ])
  ).toEqual([
    "l",
    "a",
    "s",
    "t",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "e",
    "v",
    "e",
    "r",
    " ",
    "f",
    "i",
    "r",
    "s",
    "t",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "g",
    "r",
    "e",
    "a",
    "t",
    "e",
    "s",
    "t"
  ]);
});
