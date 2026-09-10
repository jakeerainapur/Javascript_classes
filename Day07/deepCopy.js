 let ar1=[23,2,56 ];
 let ar3=[...ar1]//spread operator use to create new array from existing array?8?
console.log(ar1)
console.log(ar3)

let ar2=structuredClone(ar1);//structuredClone method use to create new array from existing array?8?

console.log(ar2)

ar1.push(24);
console.log(ar1)
console.log(ar2)
//structuredClone creates a deep copy, so modifying the original array does not affect the cloned array

