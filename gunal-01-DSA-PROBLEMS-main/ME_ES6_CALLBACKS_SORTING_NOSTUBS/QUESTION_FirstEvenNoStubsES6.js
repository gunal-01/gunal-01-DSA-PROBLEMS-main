
module.exports = firstEven

function firstEven(arr) {
    return arr.find(e => e%2 === 0);
}