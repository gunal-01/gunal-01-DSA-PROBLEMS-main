module.exports = createMatrixII;

function createMatrixII(size) {
        let matrix = [];
        let count = 0;
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            row.push(count);
            count++;
        }
        matrix.push(row);
    }
    return matrix;
}



if (JSON.stringify(createMatrixII(2)) !== JSON.stringify([ [ 0, 1 ], [ 2, 3 ] ])) 

console.log("Test fails: Expected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2"); 

else 

console.log("Sample test case for input size = 2 passed!");
