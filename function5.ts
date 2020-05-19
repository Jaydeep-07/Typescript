//The rest parameter is used to pass zero or more values to a function

function sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result += b[i];  
    }  
    return result;  
  }  
  let result1 = sum(3, 5);  
  let result2 = sum(3, 5, 7, 9);  
  console.log(result1 +"\n" + result2);  