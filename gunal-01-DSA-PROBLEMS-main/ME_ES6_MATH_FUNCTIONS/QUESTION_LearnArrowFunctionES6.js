/**
 * @param {number} len
 * @param {number} bre
 * @return {number | string} 
 */
 const calculateArea = (len, bre) => {
    // You only need to implement this function.
    if(len === 0 || bre === 0){
        return 'Not Possible';
    } else {
    return Math.abs(len)*Math.abs(bre);
    }
};


if (calculateArea(2, 3) !== 6)
    console.log("Test fails: Expected 6 for input len = 2 and bre = 3");
else
    console.log("Sample test case for input len = 2 and bre = 3 passed!");


module.exports = calculateArea;

