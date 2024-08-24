module.exports = modifyNestedObject;

function modifyNestedObject(obj, num) {
    obj.address.streetNumber = num;
    return obj;
}


if ( modifyNestedObject({ address: { streetNumber: 5 } }, 8).address .streetNumber !== 8 ) 

    console.log( "Test fails: Expected { address: { streetNumber: 8}} for input obj = { address: { streetNumber: 5 }}, and num = 8" ); 

else 

    console.log( "Sample test case for input obj = { address: { streetNumber: 5 }}, and num = 8 passed!" );
