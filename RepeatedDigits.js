//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77 etc and store them in an array
function reverseDigits(num) 
{
    let reverse = 0;
    let digit;
    while (num > 0) 
    {
      digit = (num % 10)
      reverse = reverse * 10 + digit;
      num = Math.floor(num / 10);
    }
    return reverse;
}
array = [];
for (let i = 0; i <= 100; i++) 
{
    if (i == reverseDigits(i) && i > 10) 
    {
      array.push(i);
    }
}
console.log(array);