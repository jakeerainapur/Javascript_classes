ar1=[{name:"ram","age": 23},{name:"shyam","age": 24}]//cant modify the original array after creating a deep copy using structuredClone method

console.log(ar1);
let ar2=structuredClone(ar1);//structuredClone method use to create new array from existing array?8?
console.log(ar2);

ar1[1].age=25;
console.log(ar1)
console.log(ar2)//structuredClone creates a deep copy, so modifying the original array does not affect the cloned array 