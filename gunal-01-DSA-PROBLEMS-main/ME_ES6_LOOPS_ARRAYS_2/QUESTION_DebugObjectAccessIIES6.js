/**
 * @return {string}
 */
function getFirstItem() {
  const shoppingCart = {1: "Apple", 2: "Orange"};
  return shoppingCart['1'];
}

console.log(getFirstItem());

console.log("You can use console statements to check how to access properties of an object and try debugging.");

module.exports = getFirstItem;


