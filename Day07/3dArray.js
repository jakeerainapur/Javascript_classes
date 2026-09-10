let arr=[
   [
    [34,45],
    [23,56],
   ],
   [
    [56,89],
    [23,45,67],
   ] 
];

let i,j,k;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        for(k=0;k<arr[i][j].length;k++){
            console.log(arr[i][j][k])
        }
    }
}