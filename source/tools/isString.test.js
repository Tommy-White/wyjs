import isString from './isString';

test('isString(null)', () => {
  expect(isString(null)).toBeFalsy();
})


test('isString(undefined)', () => {
  expect(isString(undefined)).toBeFalsy();
})

test(`isString('')`, () => {
  expect(isString('')).toBeTruthy();
})

test(`isString('')`, () => {
  expect(isString('test string')).toBeTruthy();
})

test(`isString(String())`, () => {
  expect(isString(String())).toBeTruthy();
})

test(`isString(new String())`, () => {
  expect(isString(new String())).toBeFalsy();
})

test(`isString(new Object())`, () => {
  expect(isString(new Object())).toBeFalsy();
})

test(`isString(false)`, () => {
  expect(isString(false)).toBeFalsy();
})
