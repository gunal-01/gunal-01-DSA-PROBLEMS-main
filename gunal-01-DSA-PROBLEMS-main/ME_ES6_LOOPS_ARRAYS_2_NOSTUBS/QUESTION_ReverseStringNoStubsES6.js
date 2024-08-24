module.exports = reverseString;

function reverseString(str) {
  return str.split("").reverse().join("");
}


if (reverseString("abcdefghi") !== "ihgfedcba") 

console.log("Test fails: Expected 'ihgfedcba' for input str = 'abcdefghi'"); 

else 

console.log("Sample test case for input str = 'abcdefghi' passed!");
