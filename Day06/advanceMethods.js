let ages=[20,21,60,18,21]

/*
let result=numbers.map(function(x){// Map method use to create new array from existing array?8?
    return Math.sqrt(x);
})//map method

console.log(result)
console.log(ages)*/

function checkAge(x){
 if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}
let result=ages.filter(function(x){//filter method use to create new array from existing array?8?
    return checkAge(x);
})
console.log(result)