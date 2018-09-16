/**
 *
 * Test x is a string or object construct by new String
 *
 * @func
 *
 * @param {*} x
 * @return {Boolean}
 */

export default function isStringLike(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

// const isStringLike = (x) =>
//   Object.prototype.toString.call(x) === '[object String]';

// export default isStringLike
