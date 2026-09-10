
let student;
student={name:"Ram",
age:20,
grade:"A",

coding:function(){
    console.log("Ram is coding");
},
dancing:function(){
    console.log("Ram is dancing");
},
running:function(){
    console.log("Ram is running");
}

};
student.name="Ramu";
student.age=21;
console.log(student.name);
console.log(student.age);
console.log(student.grade); 
student.coding();
student.dancing();