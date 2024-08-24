/**
 * @param {number[]} arr
 * @param {number} key
 * @return {boolean}
 */


function search(arr, key) {
  // You only need to implement this function.
   let found = false;
   arr.forEach(element => {
     if(element === key) {
       found = true;
     }
   });
   return found;
}

if (search([1, 2, 3, 2, 3, 2], 0) != false)
  console.log("Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 ");
else
  console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!");


module.exports = search

