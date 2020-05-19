enum AppStatus {  
    ACTIVE = 'ACT',  
    INACTIVE = 'INACT',  
    ONHOLD = 'HLD',  
    ONSTOP = 'STOP'  
}  
function checkStatus(status: AppStatus): void {  
   
    console.log(status);  
}  
checkStatus(AppStatus.ONSTOP);  