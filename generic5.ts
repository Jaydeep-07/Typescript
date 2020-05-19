interface People {  
    name: string  
    age: number  
}  
interface Celebrity extends People {  
    profession: string  
}  
function printName<T extends Celebrity>(theInput: T): void {  
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
}  
let player: Celebrity = {  
    name: 'Jaydeep Patil', age: 22, profession: 'Developer'  
}  
printName(player);  