/**
 * @param {object}obj
 * @param {string}propName
 * @param {string}str
 * @return {string}
 */


function updateProperty(obj, propName, str) {
  // You only need to implement this function.
  obj[propName] = str;
  return obj[propName];
}

if ((updateProperty({ firstName: 'Alex' }, 'firstName', 'John')) !== 'John')
  console.log("Test fails: Expected 'John' for input  obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John'");
else
  console.log("Sample test case for input obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John' passed!");


module.exports = updateProperty

