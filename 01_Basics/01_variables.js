const accountId = 13489;
let accountEmail = "rahul@google.com";
var accountPassword = "12345";
accountCity = "Faridabad"; //This way is not good Dont Prefer it 
let accountState;  // undefined value 

// accountId = 2; This Giving Type Error(Assingment to constant Variable ): Not Allowed 
console.log(accountId);

accountEmail = "rv@google.com";
accountPassword = "21211";
accountCity = "Banglore";

//Print all the Variable in a Table 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//var has scope Problem So We will use let 
//and const is used for constant variables

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/