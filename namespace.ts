namespace studentCalc{  
    export function AnualFeeCalc(feeAmount: number, term: number){  
    return feeAmount * term;  
    }  
}  


/// <reference path = "./studentCalc.ts" />  
  
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);  
  
console.log("Output: " +TotalFee);  