/**
 * @param {string}firstName
 * @param {string}middleName
 * @param {string}lastName
 * @return {object}
 */


function getFullName(firstName,middleName,lastName){
  // You only need to implement this function.
  const fullName = firstName + ' ' + middleName + ' ' + lastName;
  return {fullName: fullName};
}

if ((getFullName('Alex','P','John')).fullName !== 'Alex P John')
  console.log("Test fails: Expected { fullName: 'Alice P John' } for input firstName ='Alex', middleName = 'P', and lastName = 'John'");
else
  console.log("Sample test case for input firstName ='Alex', middleName = 'P', and lastName = 'John' passed!");


module.exports = getFullName

