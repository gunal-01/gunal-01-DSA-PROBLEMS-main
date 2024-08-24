/**
 * @param {number[]} arr
 * @return {string}
 */


function createPhoneNumber(arr){
  let result = '';
  if(arr.length === 10) {
    for(let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  } else {
    return null;
  }
}

if (createPhoneNumber([9, 8, 7, 4, 5, 6, 3, 2, 1, 0]) !== "9874563210")
  console.log("Test fails: Expected '9874563210' for input arr = [9, 8, 7, 4, 5, 6, 3, 2, 1, 0]");
else
  console.log("Sample test case for input arr = [9, 8, 7, 4, 5, 6, 3, 2, 1, 0] passed!");

module.exports = createPhoneNumber

