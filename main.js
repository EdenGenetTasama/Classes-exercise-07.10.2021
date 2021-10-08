

class Students{
    firstName;
    lastName;
    age;
    email;
    classStudent;
    image;
    constructor(firstName,lastName,age,email,classStudent,image){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.email=email;
        this.classStudent = classStudent;
        this.image=image;
    }
    toString = function() {
        return this.firstName+this.lastName+toString(this.age)+this.email+toString(this.classStudent)+this.image;
    }
    toPrintToLog = function() {
        return this.firstName+this.lastName+this.age+this.email+this.classStudent+this.image;
    }
    
}



let one = new Students("EDEN", "TASAMA" , 25 , "DDDDDD@GMAIL.COM" , 10 ,"https://cdn.pixabay.com/photo/2021/08/22/18/10/hummingbird-6565805__340.jpg")
one.toString();
console.log(one);

btnID.onclick=()=>{
    let Two = new Students(firstNameID.value , lastNameID.value ,ageID.value,emailID.value,classID.value,imageID.value );
    console.log(Two);
    for (const key in Two) {
        divShowInfo.innerHTML += `<p>${key} ${Two[key]}</p>`;
        
    }
}