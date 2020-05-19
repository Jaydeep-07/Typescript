interface Calc {  
    addition (first: number, second: number): any;  
}  
   
let Calculator: Calc = {  
    addition(first: number, second: number) {  
        return first + second;  
    }  
}  