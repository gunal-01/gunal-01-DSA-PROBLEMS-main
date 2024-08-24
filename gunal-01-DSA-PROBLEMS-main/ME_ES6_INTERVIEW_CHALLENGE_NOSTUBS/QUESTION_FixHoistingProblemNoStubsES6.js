

function hoistingProblem() { 
   var greeting = function() {
     return 'Hello';
   };
    console.log(greeting());
}
hoistingProblem();

  

module.exports = hoistingProblem;

