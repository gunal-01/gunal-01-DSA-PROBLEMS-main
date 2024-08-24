/**
 * @param {number} numberPlate
 * @return {string}
 */

function isFourDigit(number) {
    return number >= 1000 && number<=9999;
}

function sumOfDigits(number) {
  let sum = 0;
  while(number>0) {
    sum+= number%10;
    number = Math.floor(number/10);
  }
  return sum;
}
function isPrime(sumOfNumbers) {
  for(let i=2; i < Math.sqrt(sumOfNumbers); i++) {
    if(sumOfNumbers % i === 0) {
      return false;
    }
  }
  return true;
}
function isPerfectSq(number) {
  let root = Math.sqrt(number);
  return root === Math.floor(root);
}


function driverfunction(numberPlate) {
  let flag = 0;
  if (isFourDigit(numberPlate)) {
    var sum = sumOfDigits(numberPlate);
    if (isPrime(sum)) {
      var newSum = sumOfDigits(sum);
      if (isPerfectSq(newSum)) {
        flag = 1;
      }
    }
  }
  if (flag) {
    return "Miraculous";
  } else {
    return "Non Miraculous";
  }
}

if (driverfunction(1237) !== "Miraculous")
  console.log("Test fails: Expected Miraculous for numberPlate = 1237");
else console.log("Sample test case for numberPlate = 1237 passed!");

if (driverfunction(567) !== "Non Miraculous")
  console.log("Test fails: Expected Non Miraculous for numberPlate = 567");
else console.log("Sample test case for numberPlate = 567 passed!");

module.exports = driverfunction;

