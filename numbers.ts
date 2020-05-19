let myNumber: number = 12345;  
let myNumber_1: number = 12.8789;  
let myNumber_2: number = 12667.976;  
let myNumber_3: number = 12.5779;  
let myNumber_4: number = 1234;  
let myNumber_5 = new Number(123);  
  
console.log("Number Method: toExponential()");  
console.log(myNumber.toExponential());   
console.log(myNumber.toExponential(2));  
  
console.log("Number Method: toString()");  
console.log(myNumber.toString());  
console.log(myNumber.toString(4));  
  
console.log("Number Method: toFixed()");  
console.log(myNumber_1.toFixed());  
console.log(myNumber_1.toFixed(3));  
  
console.log("Number Method: toLocaleString()");  
console.log(myNumber_2.toLocaleString()); // returns in US English  
  
console.log("Number Method: toPrecision()");  
console.log(myNumber_3.toPrecision(1));   
console.log(myNumber_3.toPrecision(3));  
  
console.log("Number Method: tovalueOf()");  
console.log(myNumber_5)  
console.log(myNumber_5.valueOf())  
console.log(typeof myNumber)  