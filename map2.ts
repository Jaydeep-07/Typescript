let ageMapping = new Map();  
   
ageMapping.set("Jaydeep", 40);  
ageMapping.set("Vivek", 25);  
ageMapping.set("Piyush", 30);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  