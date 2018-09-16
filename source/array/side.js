// Gets the first/last element of an array
export default function side(array=[], reverse = 0) {
  let front;
  return !reverse
    ? (
      [front, ] = array,
      front
    )
    : (
      array[array.length-1]
    )
}
