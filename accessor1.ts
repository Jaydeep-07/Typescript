class MyDrawing {    
    length: number = 10;    
    breadth: number = 8;    
   
    get rectangle() {    
        return this.length * this.breadth;    
    }    
}    
console.log(new MyDrawing().rectangle);  