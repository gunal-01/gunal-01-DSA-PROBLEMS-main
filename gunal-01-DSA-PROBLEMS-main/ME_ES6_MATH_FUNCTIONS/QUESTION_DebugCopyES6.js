/**
 * @param {object} data
 * @param {string} str
 * @return {boolean}
 */


function copy(data, str) {

  //Note: this is the correct code. since where both variable points to the same object data. Here we create a shallow copy of the data object using the spread syntax ...data. This creates a new object with the same properties as data, but it's a seperate object in memory. And while mmodifyig data_copy, it does'nt affect the original data object. That's the reason in which comparison process evaluates it to false and the function returns true !.
  const data_copy = {...data}; 
  data_copy.name = str;
  if (data === data_copy)
    return true;
  else
    return false;
}
if (copy({name: "Kevin", age: 40 }, "Allen") !== false)
  console.log("Test fails: Expected false for input data = {name: 'Kevin', age: 40 } and str = 'Allen'");
else
  console.log("Sample test case for input data = {name: 'Kevin', age: 40 } and str = 'Allen' passed!");

module.exports = copy;

