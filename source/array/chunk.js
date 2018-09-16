export default function chunk(array, indicator) {
  let last, rest;
  if (indicator === 0) {
    return [...array];
  } else {
    return array.reduce((arr, item, idx) => {
      return idx % indicator === 0
        ? [...arr, [item]]
        // method 1
        // : // arr.slice([begin[, end]])
        //   [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
        // method 2
        : (
           [...rest] = arr.slice(0, -1),
           [last, ] = [...arr].reverse(),
           [...rest, [...last, item]]
        )
    }, []);
  }
}

