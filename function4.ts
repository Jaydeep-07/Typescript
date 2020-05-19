
//default para
function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('Jaydeep'));     
console.log(displayName('Jaydeep', 'Patil'));     
console.log(displayName('vivek'));     