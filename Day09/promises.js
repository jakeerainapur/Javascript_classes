let prm=new Promise((resolve, reject) =>{//creating a promise and passing a function with two parameters resolve and reject
console.log('failing promise');
    reject("Promise rejected");
    
} );
prm.then((message) => {//then use to handle the resolved promise
    console.log("Promise resolved with message: " + message);
}).catch((error) => {//catch use to handle the rejected promise
    console.log("Promise rejected with error: " + error);
});