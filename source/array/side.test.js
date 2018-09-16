import side from './side';

test('get the head of an array', () => {
  expect(side([1,2,3])).toBe(1)
})

test('get the foot of an array', () => {
  expect(side([1,2,3], 1)).toBe(3)
})

test('get head from empty array', () => {
  expect(side([])).toBe(undefined);
})

test('get foot from empty array', () => {
  expect(side([])).toBe(undefined);
})
