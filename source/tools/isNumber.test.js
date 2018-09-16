import isNumber from './isNumber';

test('isNumber()', () => {
  expect(isNumber()).toBeFalsy();
})

test('isNumber(null)', () => {
  expect(isNumber(null)).toBeFalsy();
})

test('isNumber(1)', () => {
  expect(isNumber(1)).toBeTruthy();
})

test('isNumber(Number(-1))', () => {
  expect(isNumber(Number(-1))).toBeTruthy();
})

test('isNumber(1)', () => {
  expect(isNumber(1)).toBeTruthy();
})

test('isNumber(-1)', () => {
  expect(isNumber(-1)).toBeTruthy();
})

test('isNumber(true)', () => {
  expect(isNumber(true)).toBeFalsy();
})

test('isNumber(new Number(1))', () => {
  expect(isNumber(new Number(1))).toBeFalsy();
})

test(`isNumber('true')`, () => {
  expect(isNumber('true')).toBeFalsy();
})


test(`isNumber(NaN)`, () => {
  expect(isNumber(NaN)).toBeTruthy();
})
