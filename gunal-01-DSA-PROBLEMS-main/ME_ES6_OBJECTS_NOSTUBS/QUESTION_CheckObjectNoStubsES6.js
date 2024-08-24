module.exports = checkObject;

function checkObject(par1, par2) {
        if (Array.isArray(par1) || Array.isArray(par2)) {
                return true;
        } else {
            return false;
        }
}


if (checkObject(["code", "javascript"], { language: "javascript" }) !== true) 

    console.log( "Test fails: Expected true for input par1 = ['code','javascript'], and par2 = {language:'javascript'}" ); 

else 

    console.log( "Sample test case for input par1 = ['code','javascript'], and par2 = {language:'javascript'} passed!" );
