type MobName = "Apple" | "Redmi" | "Oppo";  
function showMobName(fruitsName: MobName): void {  
    console.log(fruitsName);  
}  
showMobName('Apple');    
//Compile Time Error  
//showMobName('Realme');  