/**
 * @param {number} n
 * @return {number[]}
 */


function oddNumbers(n){
  // You only need to implement this function.
  let oddNums = [];
  for(let i = 1; i <= n; i++) {
    if(i % 2 !== 0) {
      oddNums.push(i);
    }
  }
  return oddNums;
}

if (oddNumbers(5).toString() !== [1, 3, 5].toString())
  console.log("Test fails: Expected [1, 3, 5] for input n = 5");
else
  console.log("Sample test case for input n = 5 passed!");

module.exports = oddNumbers

