//single dimensional array copy using slice and spread operator not modifying updated array

let ar1=[[23,2,56 ],[23, 45,56]];//2d array modifing also print slice and spread operator


let ar3=[...ar1]//spread operator use to create new array from existing array?8?
let ar2=ar1.slice();//slice method use to create new array from existing array?8?
console.log(ar1);
console.log(ar2);

ar1[1].push(24);
console.log(ar1)
console.log(ar2)
console.log(ar3)