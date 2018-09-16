import compact from "./compact";

const falsies = [false, "", 0, null, undefined, NaN];
test("compact arr that all falsy", () => {
  expect(compact(falsies)).toEqual([]);
});

const asummingNum = [-1, 1];
test("compact arr -> num", () => {
  expect(compact(falsies.concat(asummingNum))).toEqual(asummingNum);
});

const asummingStr = ["yes", "false", "123"];
test("compact arr -> string", () => {
  expect(compact(falsies.concat(asummingStr))).toEqual(asummingStr);
});

const boolean = [true, true, false];
test("compact arr -> string", () => {
  expect(compact(falsies.concat(boolean))).toEqual([true, true]);
});

const nfn = () => {}
var newObj = new Object();
const muti = [true, 123, 0, "yep", newObj, false, nfn, [], {}]
test("compact arr -> muti", () => {
  expect(compact(falsies.concat(muti))).toEqual([true, 123, "yep", newObj, nfn, [], {}]);
});
