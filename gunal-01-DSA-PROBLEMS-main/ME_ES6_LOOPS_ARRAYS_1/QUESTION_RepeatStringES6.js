/**
 * @param {string} str
 * @param {number} k
 * @return {string}
 */


function repeatString(str, k) {
  let ans = "";
  for(let i = 0; i < k ; i++) {
    ans += str;
  }
  return ans;
}

if (repeatString("!", 3) !== "!!!")
  console.log("Test fails: Expected '!!!' for input str = '!' and k = 3");
else
  console.log("Sample test case for input str = '!' and k = 3 passed!");

module.exports = repeatString

