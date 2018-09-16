export default function flatten(array = []) {
  return array.reduce((arr, item) => arr.concat(item), []);
}
