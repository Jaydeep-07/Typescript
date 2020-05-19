function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "Jaydeep"]);  
arrNumber.push(40); // Correct  
arrNumber.push("Hi! Jaydeep"); // Compilation Error  
arrString.push("Hello TypeScript"); // Correct  
arrString.push(50); // Compilation Error  
console.log(arrNumber);  
console.log(arrString);  