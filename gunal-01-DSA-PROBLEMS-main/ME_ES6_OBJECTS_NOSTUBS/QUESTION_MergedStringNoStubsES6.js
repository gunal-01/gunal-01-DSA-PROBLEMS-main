module.exports = mergedString;

function mergedString(str) {
    let [x,y,z] = str;
    return `${x} ${y} ${z}`;
}


if (mergedString(["code", "for", "good", "intent"]) !== "code for good") 

    console.log( "Test fails: Expected 'code for good' for input str = ['code','for','good', 'intent']" ); 

else 

    console.log( "Sample test case for input str = ['code','for','good', 'intent'] passed!" );
