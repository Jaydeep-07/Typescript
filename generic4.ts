class StudentInfo<T,U>  
{   
    private Id: T;  
    private Name: U;  
    setValue(id: T, name: U): void {   
        this.Id = id;  
        this.Name = name;  
    }  
    display():void {   
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);  
    }  
}  
let st = new StudentInfo<number, string>();  
st.setValue(1, "Jaydeep");  
st.display();  
let std = new StudentInfo<string, string>();  
std.setValue("2", "Vivek");  
std.display();  