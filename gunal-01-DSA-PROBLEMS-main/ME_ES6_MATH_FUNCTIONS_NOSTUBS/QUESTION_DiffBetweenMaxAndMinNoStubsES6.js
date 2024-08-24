
module.exports = maxMinDifference;

function maxMinDifference(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
       min = Math.min(arr[i],min);
       max = Math.max(arr[i],max);
    }
    return max - min;
}