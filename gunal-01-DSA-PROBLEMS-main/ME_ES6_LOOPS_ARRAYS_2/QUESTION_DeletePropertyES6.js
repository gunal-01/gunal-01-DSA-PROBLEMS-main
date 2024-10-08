/**
 * @param {object}obj
 * @param {string}propName
 * @return {object}
 */

function deleteProperty(obj, propName) {
  // You only need to implement this function.
  delete obj[propName];
  return obj;
}

if (
  deleteProperty(
    { firstName: "Sachin", middleName: "Ramesh", lastName: "Tendulkar" },
    "middleName"
  ).middleName !== undefined
)
  console.log(
    "Test fails: Expected { firstName: 'Sachin', lastName;'Tendulkar'} for input { firstName: 'Sachin', middleName: 'Ramesh', lastName:'Tendulkar'}, 'middleName'"
  );
else
  console.log(
    "Sample test case for input { firstName: 'Sachin', middleName: 'Ramesh', lastName:'Tendulkar'}, 'middleName' passed!"
  );

module.exports = deleteProperty;

