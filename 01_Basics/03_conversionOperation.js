let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);  //Not a Number 

let scoreN = null;
console.log(typeof scoreN);

let valueInNumber2 = Number(scoreN);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let scoreU = undefined;
let valueInNumber3 =Number(undefined);
console.log(valueInNumber3);
console.log(typeof valueInNumber3);


// "33" -> 33
//"33abc" -> NaN
// true -> 1 ; false -> 0 

let isLoggedIn = "Rahul";

let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);

//1 -> true ; 0 -> false 
//"" -> false ; "Rahu" -> true 

let SomeNumber  = 33;
let StringNumber = String(SomeNumber);
console.log(StringNumber);
console.log(typeof StringNumber);