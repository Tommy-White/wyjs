/**
 *
 * Test x is a number or object construct by new Number
 *
 * @func
 *
 * @param {*} x
 * @return {Boolean}
 *
 * note: Object.prototype.toString.call(NaN) -> [object Number]
 *
 */
export default function isNumberLike(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}
