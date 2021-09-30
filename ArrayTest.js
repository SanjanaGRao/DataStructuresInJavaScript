let origDogs = ["Bulldog", "Beagle","Labrador"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Falmingos");

//Array copy elements
let sliceDogs = origDogs.slice(1,2);
console.log("Slicing: " + sliceDogs);
console.log("After Slicing: " + origDogs);
let copyDogs = [...origDogs];
console.log(copyDogs);
let dogs = origDogs.slice(0);
console.log(dogs);

//Stack Functions (LIFO) Push and Pop
let pushDog = dogs.push("Golden Retriever");
console.log(pushDog);
console.log(dogs);
let popDog = dogs.pop();
console.log(dogs);
dogs[dogs.length] = "Poodle";
console.log(dogs);

//Add and Remove from first
let addFirst =  dogs.unshift("Golden Retriever");
console.log(addFirst);
let shiftDog = dogs.shift();
console.log(shiftDog);
console.log("Before Spliced: " + dogs);

//Atomic add and remove elements(where,how many to remove, element list)
dogs.splice(2,1,"Pug","Boxer");
console.log("Spliced: " + dogs);

//Array function - Concat, Slice and Sort
let animals = dogs.concat(cats,birds);
console.log("Animals array: "  + animals);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second])
{
    console.log("Scan: " + first + " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");

//Example for Slice and Splice
//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array);
console.log(array2);