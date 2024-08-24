
module.exports = greeting

function greeting(day) {
    function say() {
        return `Today is: ${day}`;
    }
    return say;
}

// Call the greeting() function with the "day" parameter thus returning the inner function

let greetFn = greeting('Sunday');


// Calls the returned inner function now to get the formatted greeting string

let result = greetFn();


if (result !== 'Today is: Sunday') {

  console.log("Test fails: Expected 'Today is: Sunday' for input day = 'Sunday' ");

} else {

  console.log("Sample test case for input day = 'Sunday' passed!");

}
