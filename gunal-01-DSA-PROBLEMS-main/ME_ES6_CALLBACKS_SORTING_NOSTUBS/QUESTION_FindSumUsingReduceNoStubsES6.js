
module.exports = sum

function sum(arr) {
    let res = arr.reduce((a,b) => a+b,0); //here the initial value of a is set to 0
    return res
}
console.log(sum([1,2,3,4]));