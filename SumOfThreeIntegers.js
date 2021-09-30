//Write a Program to show Sum of three Integer adds to ZERO
var array = [];
var sum = 0 ;
var integer1 = parseInt(process.argv[2]);
var integer2 = parseInt(process.argv[3]);
var integer3 = parseInt(process.argv[4]);
array.push(integer1,integer2,integer3);
console.log("The array is: " + array);
array.forEach((element) => {
    sum+=element;
});
console.log("The sum of three integers is: " + sum);
