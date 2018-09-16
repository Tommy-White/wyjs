/**
 * Test is an object, include(object, new String(), new Number(), new Boolean)
 *
 * @func
 *
 * @param {any} x
 * @return {Boolean}
 *
 */
export default function isObject(x) {
  const toStringIndicator =  Object.prototype.toString.call(x) === '[object Object]';
  if(x && !toStringIndicator) {
    return typeof x === 'object'
  } else {
    return toStringIndicator;
  }
}
