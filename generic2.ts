function getItems(items: any[] ) : any[] {  
    return new Array().concat(items);  
}  
let myNumArr = getItems([10, 20, 30]);  
let myStrArr = getItems(["Hello", "Jaydeep"]);  
myNumArr.push(40); // Correct  
myNumArr.push("Hello TypeScript"); // Correct  
myStrArr.push("Hello SSSIT"); // Correct  
myStrArr.push(40); // Correct  
console.log(myNumArr); // [10, 20, 30, 40, "Hello TypeScript"]  
console.log(myStrArr); // ["Hello", "Jaydeep", "Hello SSSIT", 40]  