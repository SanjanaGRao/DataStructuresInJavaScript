let jsonD = {
    "key1":"value1",
    "key2":"value2",
    "key3":"value3",
    "key4":"value4",
}

console.log("jsonD second key value - " + jsonD.key2);
console.log("jsonD second key value - " + jsonD["key2"]);
console.log("length of jsonD - " + Object.keys(jsonD).length);
console.log("length of json - " + Object.keys(jsonD));
console.log("jsonD key 5 present or not - " + jsonD.hasOwnProperty("key5"));

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]