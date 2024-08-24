/**
 * @param {number[]} arr
 * @return {number[]}
 */


function halfValues(arr) {
  // You only need to implement this function.
  let result = [];
  arr.forEach((ele,index) => result.push(ele/(index+1)));
  return result;
}

if (halfValues([2, 3, 4]).toString() != [2, 1.5, 1.3333333333333333].toString())
  console.log("Test fails: Expected [ 2, 1.5, 1.3333333333333333 ] for input arr = [2, 3, 4] ");
else
  console.log("Sample test case for input arr = [2, 3, 4] passed!");


module.exports = halfValues

