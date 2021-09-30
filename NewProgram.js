var a = [1, 2, 4, 6];

 //Using forEach
a.forEach((number,index) => {
    if(index<a.length-1)
    {
        console.log(number + "_");
    }
});
console.log(a[a.length - 1 ]);

//using join
console.log(a.join("_\n"));

//Using Map
const newArray = a.map((elements) => {
    return elements + "_";
});
console.log(newArray);

//Using Filters
const filterArray = a.filter((element) => element != 6 );
console.log(filterArray);

//Using arrow functions - example
const add = (c=1, d=1) => {
    console.log(c+d);
}

add(10,20);