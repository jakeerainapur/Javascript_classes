 const scan=(require("prompt-sync")())

  let name=scan("Enter the name: ");

 function greet(){
     console.log("Good morning   "+ name);
 }

 greet();