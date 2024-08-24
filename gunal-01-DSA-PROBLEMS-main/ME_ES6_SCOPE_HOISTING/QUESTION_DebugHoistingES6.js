/**
 * @return {void}
 */


function doSomething() {
  console.log(x); // here x is hoisted and initialized with undefined and by leveraging javascript hoisting mechanism to access x by changing let to var will help to eradicate the error. - This comment is for my reference to recall what i learned previously through practical approach while solving the problem and it also represents the insights that i learned over the crio sessions!
  var x = 1;
}

console.log("Do not change the order of statements. Check whether you can use a different keyword to declare a variable and try debugging.");

module.exports = doSomething;

