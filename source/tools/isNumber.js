/**
 * Test is number literal
 *
 * @func
 *
 * @param {any} x
 * @return {Boolean}
 *
 * note: typeof NaN -> number
 *
 */
export default function isNumber(x) {
  return typeof x === 'number';
}
