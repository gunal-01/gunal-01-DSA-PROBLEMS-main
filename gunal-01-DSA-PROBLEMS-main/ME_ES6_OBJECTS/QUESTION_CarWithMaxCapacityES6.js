/**
 * @param {object[]} arr
 * @return {string}
 */
function maxCapacityType(arr) {
    // You only need to implement this function.
        let  maxCapacity = 0;
        let maxCapacityType = "";
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].capacity > maxCapacity) {
                maxCapacity = arr[i].capacity;
                maxCapacityType = arr[i].type;
            }
        }
        return maxCapacityType;
}


if (maxCapacityType([{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}]) !== 'Station Wagon')
    console.log("Test fails: Expected 'Station Wagon' for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}]");
else
    console.log("Sample test case for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}] passed!");


module.exports = maxCapacityType;

