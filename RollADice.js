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
var dicecountDictionary = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};
console.log(dicecountDictionary);
let check = true;
while(check)
{
    let diceValue = Math.floor(Math.random()*6 + 1 );
    for(value in dicecountDictionary)
    {
        if(diceValue == value)
        {
            dicecountDictionary[value]++ ;
        }
        console.log("The Dice Value is: " + value);
        if (dicecountDictionary[value] == 10) 
        {
            console.log("The Key " + value + " has been repeated for 10 times.");
            check = false;
            break;
        }
    }
}
console.log(dicecountDictionary);