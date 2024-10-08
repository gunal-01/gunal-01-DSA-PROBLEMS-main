/**
 * @param {string[]} arr
 * @param {number} startIndex
 * @param {number} deleteCount
 */

function remove(fruits, startIndex, deleteCount) {
  // You only need to implement this function.
  fruits.splice(startIndex,deleteCount);
  return fruits;
}

var arr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
if (remove(arr, 2, 2) && JSON.stringify(arr) !== JSON.stringify(["Banana", "Orange", "Kiwi"]))
  console.log("Test fails: Expected ['Banana', 'Orange', 'Kiwi'] for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], startIndex = 2, deleteCount = 2");
else
  console.log("Sample test case for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], startIndex = 2, deleteCount = 2 passed!");

module.exports = remove

