var array = [];
//to get 3 digit random number
var MinVal=100;
var MaxVal=999;		
for(let i=0;i<10;i++)
{
    array.push(Math.floor(Math.random()*(MaxVal-MinVal+1)+MinVal));
}
array.sort((a,b) => a - b);
console.log("The array generated is: "+ array);
let arr = array;
// get the max of the array
let max = Math.max.apply(null, arr); 
//remove the maximum element
arr.splice(arr.indexOf(max), 1); 
//print the second largest
console.log("Second Maximum element: "+Math.max.apply(null, arr));
//get the min of the array
let min = Math.min.apply(null,arr);
//remove the min of the array
arr.splice(arr.indexOf(min),1);
//print the second smallest
console.log("Second Minimum element: "+Math.min.apply(null,arr));
