//Extend the Prime Factorization Program to store all the Prime Factors of a
//number n into an array and finally display the output.
let number = process.argv[2];
let array = [];
for (let i = 2; i*i < number; i++) {
  while (number % i == 0) {
    array.push(i);
    number = number / i;
  }
}
if (number > 2) {
  array.push(number);
}
array.forEach((element) => {
    console.log(element);
});