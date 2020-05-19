//It is the "super type" of all data type in TypeScript. It is used to represents any JavaScript value. It allows us to opt-in and opt-out of type-checking during compilation. If a variable cannot be represented in any of the basic data types, then it can be declared using "Any" data type.


function Addition(x: any, y: any) {  
    return x + y;  
}  
let result1: any;
let result2: any;
  
result1 = Addition("Hello ", "Any!"); 
result2 = Addition(2, 3); 

console.log(result1);
console.log(result2);
