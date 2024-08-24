module.exports = manipulatingArray;

function manipulatingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr[i] += 5;
        } else {
            arr[i] *= 5;
        }
    }
    return arr;
}