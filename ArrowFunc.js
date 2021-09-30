//Normal Function in Javascript
empDailyWageArr=[100,100,300,200,100];
let totEmpWage=0;
function sum(dailyWage)
{
    totEmpWage+=dailyWage;
}
let totalWorkingDays = 5;
totalEmpHrs = 10;
empDailyWageArr.forEach(sum);
console.log("Total days: "+ totalWorkingDays +" Total hour: "+ totalEmpHrs +" Emp wage: "+ totEmpWage);  
function totalWages(totalWages,dailyWage)
 {
    return totalWages+dailyWage;
 }
console.log("Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//Arrow Function in JavaScript
let variable_name = (i, j) => i+j;
// variable_name();
// variable_name(3,4);
console.log("Arrow Function Result 1: " + variable_name());
console.log("Arrow Function Result 2: " + variable_name(3,4));

