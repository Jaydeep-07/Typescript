interface Person {   
    name:string    
 }  
 interface PersonDetail {   
     age:number  
     gender:string  
 }  
 interface Employee extends Person, PersonDetail {   
     empCode:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "Jaydeep"  
 empObject.age = 22   
 empObject.gender = "Male"  
 empObject.empCode = 43  
 console.log("Name: "+empObject.name);  
 console.log("Employee Code: "+empObject.empCode);  