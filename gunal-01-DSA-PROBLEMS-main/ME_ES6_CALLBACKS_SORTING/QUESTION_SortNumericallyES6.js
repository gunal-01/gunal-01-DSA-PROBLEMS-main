/**
 * @param {number[]} arr
 */

function sortNumerically(arr) {
  // You only need to implement this function.
    arr.sort((a, b) => a - b);
    return arr;
}

var arr = [20, 10, 50, 60];


if ( sortNumerically(arr) && JSON.stringify(arr) != JSON.stringify([10, 20, 50, 50]))
  console.log("Test fails: Expected [10, 20, 50, 60] for input arr = [20, 10, 50, 60] ");
else
  console.log("Sample test case for input arr = [20, 10, 50, 60] passed!");

module.exports = sortNumerically

