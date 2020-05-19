//We can use optional parameters by using the question mark sign ('?'). It means that the parameters which may or may not receive a value can be appended with a "?" sign to mark them as optional. In the below example, e_mail_id is marked as an optional parameter.

function showDetails(id:number,name:string,e_mail_id?:string) {   
    console.log("ID:", id, " Name:",name);   
    if(e_mail_id!=undefined)    
    console.log("Email-Id:",e_mail_id);   
 }  
 showDetails(101,"Jaydeep");  
 showDetails(105,"Vivek","v@gmail.com");  