
enum AppStatus {  
    ACTIVE,  
    INACTIVE,  
    ONHOLD  
}   
function checkStatus(status: AppStatus): void {  
    console.log(status);  
}  
checkStatus(AppStatus.ONHOLD);  