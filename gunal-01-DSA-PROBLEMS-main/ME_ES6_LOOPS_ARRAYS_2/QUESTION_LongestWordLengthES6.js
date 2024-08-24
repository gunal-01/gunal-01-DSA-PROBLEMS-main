/**
 * @param {string} str
 * @return {number}
 */


function findLongestWordLength(str){
  // You only need to implement this function.
    let words = str.split(" ");
    let maxLength = 0;
    for(let i = 0; i < words.length; i++) {
      if(words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
}

if (findLongestWordLength("I live in India") !== 5)
  console.log("Test fails: Expected 5 for input str = 'I live in India'");
else
  console.log("Sample test case for input str = 'I live in India' passed!");

module.exports = findLongestWordLength

