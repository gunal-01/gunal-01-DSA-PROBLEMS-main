
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
        return arr.filter((ele, ind) => arr.indexOf(ele) === ind);
}

console.log(removeDeduplicate([1,2,2,3,4,4,5,5]));