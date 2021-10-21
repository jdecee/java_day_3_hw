
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }   

// // LOST not even sure what the directions are asking me to do.

// for (let item in person3){
//     console.log(item)
//     console.log(person3[item])
// }

// function myFunction(person3) {
//     console.log(person3)
//   }



//=======Exercise #2=========//

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     printInfo(){
//         console.log(`Hi my name is ${this.name} and I am ${this.age}`)
//     }
//     increaseAge(years){
//         this.age += years
//         console.log(`I turned ${this.age}, YAY`)
//     }
// }

// const person1 = new Person('Jon', 30);
// const person2 = new Person('Jack', 36);

// person1.printInfo()
// person2.printInfo()
// person1.increaseAge(3)





//=======Exercise #3=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//When you splice you have to put two indexes?

//tried to follow, but got lost lol. Somehow iterate through only even indexes and replace with "even Index"

let nums = [2, 4, 6, 8, 10]


let accumulator = 0;
for (let num of nums){
    accumulator += num
}
console.log(accumulator)

let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

console.log(colors)

console.log(colors.slice(2, 5))

// Array.splice()
console.log(colors);
console.log(colors.splice(1,2,'Pink', 'Black', 'Turquoise'))
console.log(colors)

let m = [1, 2, 3, 4]

let n = m.slice()

m.pop()
console.log(m);
console.log(n);

let objectA = {age: 1}
let objectB = {age: 5}
let myNewArray = [objectA, objectB]

let copyArray = myNewArray.slice()

copyArray[0].age = 10

console.log(myNewArray)
console.log(copyArray)

console.log(objectA)
