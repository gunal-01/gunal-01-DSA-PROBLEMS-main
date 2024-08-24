module.exports = checkProperty;

function checkProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}


if ((checkProperty({ firstName: 'Alex' }, "firstName")) !== true)

  console.log("Test fails: Expected true for input obj = { firstName: 'Alex' }, and propName = 'firstName'");

else

  console.log("Sample test case for input obj = { firstName: 'Alex' }, and propName = 'firstName' passed!");

