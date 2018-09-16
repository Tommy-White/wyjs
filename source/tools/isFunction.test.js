import isFunction from './isFunction';

function fnDeclare() {}
test('isFunction(fnDeclare)', () => {
  expect(isFunction(fnDeclare)).toBeTruthy();
})

const fnVar = fnDeclare;
test('isFunction(functionVar)', () => {
  expect(isFunction(fnVar)).toBeTruthy();
})

const anonyFn = () => {}
test('isFunction(anonyFn)', () => {
  expect(isFunction(anonyFn)).toBeTruthy();
})

const obj = {
  fn() {}
}
test('test obj method', () => {
  expect(isFunction(obj.fn)).toBeTruthy();
})
