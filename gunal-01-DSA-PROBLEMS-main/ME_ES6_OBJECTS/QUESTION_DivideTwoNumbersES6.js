/**
 * @param {number} num
 * @param {number} den
 * @return {number}
 */
function divide(num, den) {
    // You only need to implement this function.
    if(den === 0) {
        if(num === 0) {
            return 0;
        } else if(num < 0) {
            return -Infinity;
        } else {
            return Infinity;
        }
    }
    return num/den;
}


if (divide(1, 4) !== 0.25)
    console.log("Test fails: Expected 0.25 for input num = 1 and den = 4");
else
    console.log("Sample test case for input num = 1 and den = 4 passed!");


module.exports = divide;

