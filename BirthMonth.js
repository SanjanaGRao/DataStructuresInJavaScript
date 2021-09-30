/*
Map Practice Program - 2
Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print.
*/
var dictionary = {};
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var year = ['1992','1993'];

for(let i=1; i<=50; i++)
{
    let randomYear = Math.floor((Math.random()*2));
    let randomMonth = Math.floor((Math.random()*12));
    dictionary["Person "+i] = months[randomMonth] + " "+ year[randomYear];
}

let month = process.argv[2];
console.log("People born in the month "+ month +" are: ");
for(key in dictionary)
{
    let temp = dictionary[key].split(" ");
    if(temp[0] == month)
        console.log(key+" was born on "+ dictionary[key]);
}