const accountId = 15544 //values cant be changed.//
let accountEmail = "nandinijaiswal262.com" //values can be changed.//
var accountPassword = "12346" 
accountCity = "Jaipur" //Though this is not a good practice but a variable can be introduced by simply assigning a value to it without use of var,let or const keyword.//
let accountState; //if a value is not assigned and then the o/p will be undefined.//
// accountId = 6657// change is note allowed while we make use of const keyword.//
accountEmail

/*Prefer not to use:
because of issue in block scope and functional scope.
 #  What is Scope?
-> Scope is nothing but the block of code written inside a curly braces.*/

console.log(accountId);
console.log(accountEmail); //Now it is a tedious method to print numerous lines of print numerous variable by writting multiple lines of console, now to avoid this we will use console table//
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
