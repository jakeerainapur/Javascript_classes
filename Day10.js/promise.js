function fun1(){
    new Promise(resolve,reject=>{
        setTimeout(()=>{
            console.log("fun1 completed");
            resolve();
        }, 3000);
    });
}


    
 async function run(){
        await fun1();
    }

    run();