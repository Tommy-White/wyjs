// get all element but the first/last
export default function kickSide(array=[], inverse = 0) {
  let rest;
  return !inverse
    ? (
      [, ...rest] = array,
      rest
    )
    : (
      array.slice(0,-1)
    )
}
