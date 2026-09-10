

let arr=new Array(5);
arr[0]=1//[1]=comes undefined
arr[2]=10
arr[3]=100
arr[4]=1000
arr[5]=10000

console.log(arr.findLast())
for(let x of arr){// for of loop
//for(let i=5;i>=0;i--){
    console.log(x);
    arr.push(60);
}

