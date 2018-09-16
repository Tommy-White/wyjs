// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
export default function find(array = [], cb) {
  return array.find(cb);
}
