let arr=new Array(5);
arr[0]=1//[1]=comes undefined
arr[1]=10
arr[2]=100
arr[3]=1000
arr[4]=10000

arr.push(60)//add last index
console.log(arr)
x=arr.pop()//last remove
console.log(arr)
console.log(x)

arr.unshift(36)
console.log(arr)//add first

arr.shift()//remove first
console.log(arr)

y=arr.splice(2,1)//remove 1 element from index 2
console.log(arr)
console.log(y)//copy from index 1 to 3 but not include 3

arr.splice(1,2,100)//add 2 elements from index 1 and add 100,200
console.log(arr)