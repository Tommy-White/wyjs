import chunk from "./chunk";

const arr1 = [0, 1, 2, 3, 4, 5, 6];

test("chunk -> 0", () => {
  expect(chunk(arr1, 0)).toEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("chunk -> 1", () => {
  expect(chunk(arr1, 1)).toEqual([[0], [1], [2], [3], [4], [5], [6]]);
});

test("chunk -> 3", () => {
  expect(chunk(arr1, 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
});

test("chunk -> -3", () => {
  expect(chunk(arr1, -3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
});

test("chunk -> length-1", () => {
  expect(chunk(arr1, arr1.length-1)).toEqual([[0, 1, 2, 3, 4, 5], [6]]);
});

test("chunk -> 100", () => {
  expect(chunk(arr1, 100)).toEqual([[0, 1, 2, 3, 4, 5, 6]]);
});

