import kickSide from "./kickSide";

test("get all but the head of an array", () => {
  expect(kickSide([1, 2, 3])).toEqual([2, 3]);
});

test("get all but the foot of an array", () => {
  expect(kickSide([1, 2, 3], 1)).toEqual([1, 2]);
});

test("empty test", () => {
  expect(kickSide([], 1)).toEqual([]);
});
