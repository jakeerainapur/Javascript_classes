function step1() {
    return new Promise((resolve, reject) => {
        console.log("Starting step 1");
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 4000);
    });
}

    function step2() {
        return new Promise((resolve, reject) => {
            console.log("Starting step 2");
            setTimeout(() => {
                console.log("Step 2 failed");//rejecting the promise
                reject();
            }, 2000);
        });
    }
    function step3() {
        return new Promise((resolve, reject) => {
            console.log("Starting step 3");
            setTimeout(() => {
                console.log("Step 3 completed");
                resolve();
            }, 1000);
        });
    }
    step1()
    .then(step2)
    .then(step3)
 
   .then(() => 
        console.log("All steps completed"))
    
    .catch(() => console.log("Promises failed"))
    ;