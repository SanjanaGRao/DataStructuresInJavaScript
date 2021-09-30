/*
Map Practice Problem 1
Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times
*/
const diceMap = new Map([
    [1,0],
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0]
]);
let check = 1;
while(check != 0)
{
   var diceValue = (Math.floor(Math.random() * 6) + 1);
   let value = diceMap.get(diceValue);
   value++;
   diceMap.set(diceValue,value);
   diceMap.forEach((key, value) => {
      if(value==10)
        {
            console.log("The key which has been printed for 10 times: "+key);
            check == 0;
        }  
    });
}
// To find the key which was generated minimum times.
let minValueKey = 1;
let minValue = diceMap.get(minValueKey);
diceMap.forEach((key, value) => {
  if(minValue > value) 
  {
     minValueKey = key;
     minValue = value;
  }
});
console.log("The key which has been printed for minimum number of times: " + minValueKey + " for "+minValue+ " number of times.");
console.log(diceMap);