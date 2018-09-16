import isStringLike from './isStringLike';

test('isStringLike(new String())', () => {
  expect(isStringLike(new String())).toBeTruthy();
})

test('isStringLike(String())', () => {
  expect(isStringLike(String())).toBeTruthy();
})


test(`isStringLike('')`, () => {
  expect(isStringLike('')).toBeTruthy();
})


test(`isStringLike(null)`, () => {
  expect(isStringLike(null)).toBeFalsy();
})


test(`isStringLike(undefined)`, () => {
  expect(isStringLike(undefined)).toBeFalsy();
})

test(`isStringLike(new Object())`, () => {
  expect(isStringLike(new Object())).toBeFalsy();
})

test(`isStringLike(false)`, () => {
  expect(isStringLike(false)).toBeFalsy();
})
