import isArray from "../tools/isArray";

export default function flattenDeep(array) {
  return isArray(array)
    ? array.reduce((arr, item) => arr.concat(flattenDeep(item)), [])
    : [array];
}
