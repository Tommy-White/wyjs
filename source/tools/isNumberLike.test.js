import isNumberLike from './isNumberLike';

test('isNumberLike()', () => {
  expect(isNumberLike()).toBeFalsy();
})

test('isNumberLike(null)', () => {
  expect(isNumberLike(null)).toBeFalsy();
})

test('isNumberLike(1)', () => {
  expect(isNumberLike(1)).toBeTruthy();
})

test('isNumberLike(Number(-1))', () => {
  expect(isNumberLike(Number(-1))).toBeTruthy();
})

test('isNumberLike(1)', () => {
  expect(isNumberLike(1)).toBeTruthy();
})

test('isNumberLike(-1)', () => {
  expect(isNumberLike(-1)).toBeTruthy();
})

test('isNumberLike(true)', () => {
  expect(isNumberLike(true)).toBeFalsy();
})

test('isNumberLike(new Number(1))', () => {
  expect(isNumberLike(new Number(1))).toBeTruthy();
})

test(`isNumberLike('true')`, () => {
  expect(isNumberLike('true')).toBeFalsy();
})

test('isNumberLike(new Object())', () => {
  expect(isNumberLike(new Object())).toBeFalsy();
})

test(`isNumberLike(NaN)`, () => {
  expect(isNumberLike(NaN)).toBeTruthy();
})
