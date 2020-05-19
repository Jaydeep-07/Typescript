let FirstName: string = "Jaydeep";   
let Designation: string = "Jr Programmer Analyst";   
  
// Before-ES6  
let output1: string = FirstName + " is " + Designation + " At Esop Pune.";   
  
// After-ES6  
let output2: string = `${FirstName} works as a ${Designation} At Esop Pune.`;   
  
console.log(output1);
console.log(output2);  