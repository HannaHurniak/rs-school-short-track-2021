/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // const arr = [];
  // const array = [];
  // const number = String(n).split('');
  // const result = String(n).split('');
  // const resultnew = result.sort((a, b) => a - b);
  // arr.push(resultnew[0]);
  // for (let i = 0; i < number.length; i++) {
  //   if (number[i] !== arr[0]) {
  //     array.push(number[i]);
  //   }
  //   return array;
  // }
  // const d = array.join('');
  // return Number(d);
  const arr = String(n).split('');
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    arr.splice(i, 1);
    const number = Number(arr.join(''));
    numbers.push(number);
    arr.splice(i, 0, result);
  }
  return Math.max(...numbers);
}

module.exports = deleteDigit;
