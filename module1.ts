export class Addition{  
    constructor(private x?: number, private y?: number){  
    }  
    Sum(){  
        console.log("SUM: " +(this.x + this.y));  
    }  
}  
// second file 
import {Addition} from './addition';  
  
let addObject = new Addition(10, 20);   
  
addObject.Sum();  