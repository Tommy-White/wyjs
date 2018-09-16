// returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
/**
 * @param  {array} array=[]
 * @param  {function} cb
 */
export default function findIndex(array = [], cb) {
  return array.findIndex(cb);
}
