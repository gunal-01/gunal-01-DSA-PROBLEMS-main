module.exports = checkPalindrome;

function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");
  if(str === reversed) {
    return true;
  }
  else {
    return false;
  }
}


if (checkPalindrome("madam") !== true) 

console.log("Test fails: Expected true for input str = 'madam'"); 

else 

console.log("Sample test case for input str = 'madam' passed!");
