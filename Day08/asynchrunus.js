function firstFunction() {
    setTimeout(() => {
        console.log("First function");
    }, 2000);
}

function secondFunction() {
    console.log("Second function");
}
function thirdFunction(){
    setTimeout(() => {
        console.log("Third function");
    }, 5000)
}
firstFunction();
secondFunction();
thirdFunction();