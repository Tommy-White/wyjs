import isObject from './isObject';

test('isObject(Object())', () => {
  expect(isObject(Object())).toBeTruthy();
})

test('isObject(new Object())', () => {
  expect(isObject(new Object())).toBeTruthy();
})

test('isObject({}})', () => {
  expect(isObject({})).toBeTruthy();
})

test('isObject(false)', () => {
  expect(isObject(false)).toBeFalsy();
})

test('isObject(0)', () => {
  expect(isObject(0)).toBeFalsy();
})

test(`isObject('')`, () => {
  expect(isObject('')).toBeFalsy();
})

test(`isObject(String())`, () => {
  expect(isObject(String())).toBeFalsy();
})

test(`isObject(new String())`, () => {
  expect(isObject(new String())).toBeTruthy();
})
