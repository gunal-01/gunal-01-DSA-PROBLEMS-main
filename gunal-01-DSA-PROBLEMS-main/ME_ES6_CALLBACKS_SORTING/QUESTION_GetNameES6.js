/**
 * @param {object[]} arr
 * @return {string[]}
 */

function getFullName(obj) {
  // You only need to implement this function.
    function fullName(person) {
      return person.firstname + " " + person.lastname;
    }
    return obj.map(fullName);
}


if (getFullName([
  { firstname: "Robert", lastname: "Obrain" },
  { firstname: "Kevin", lastname: "Hart" },
  { firstname: "Dane", lastname: "Cobby" }
]).toString() != ["Robert Obrain", "Kevin Hart", "Dane Cobby"])
  console.log("Test fails: Expected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby'] ");
else
  console.log("Sample test case passed!");


module.exports = getFullName

