// Creates a new array concatenating array with any additional arrays and/or values, no deep.
export default function concat(first=[], ...rest) {
  return first.concat(...rest)
}
