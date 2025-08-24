// let course = {
//     name: 'JS for beg',
//     hours: 3
// };
// // console.log(course.name);

// // course.name = 'suck';

// // console.log(course.name);
// course['name'] = 'pomenyal';
// console.log(course['name']);


// let property = 'hours';
// console.log(course[property]);

// const dog = {
//     name: 'Max',
//     breed: 'from street',
//     age: 3,
//     weight: 5,
//     eat: function(){
//         console.log('Chomp!')
//     },
//     bark(){
//         console.log('Woof!')
//     }
// }


//TODO Factory and Constructor functions
// const dogtwo = {
//     name: 'Bob',
//     breed: 'cool',
//     age: 5,
//     weight: 3,
//     eat: function(){
//         console.log('Chomp!')
//     },
//     bark(){
//         console.log('Woof!')
//     }
// }

// function getDog(name, breed, age, weight){
//     return{
//         name,
//         breed,
//         age,
//         weight: weight // if parameter name equal a key name, you can just write for example 'name' and not a 'name: name'
//         eat(){ 
//             console.log('Chomp!')
//         },
//         bark(){ 
//         console.log('Woof!')
//         }
//     }
// }

// const dogTwo = getDog('Bob','cool', 3, 6)

// function Dog(name, breed, age, weight){
//     // this = {};

//     // Add properties to this
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.weight = weight;

//     this.eat = function(){
//         console.log(this.name + 'Chomp!')
//     }
//     this.bark = function(){
//         console.log(this.name + 'Woof!')
//     }
//  // return this;
// }


// const anotherDog = new Dog('Bobs', 'street', 2, 6)

// console.log(anotherDog)


//TODO Dynamic Objects 

// const person = {
//     name: 'aaa'
// }
// person.age = 15
// console.log(person)

// person['Sex'] = 'male'
// console.log(person)

// delete person.Sex
// person.age = 18
// console.log(person)

// person.drink = function() {
//     console.log('Drinking')
// }
// person.drink()

// let newObj = {}                                THE SAME
// let newObj = new Object()                      THE SAME

//TODO Every function is a object in memory

// const Programmer = new Function('name',`
//     this.name = name;
//     this.writeCode = function(){
//         console.log(this.name + " Code in JS")
//     }
//     `)


// console.log(Programmer.constructor)

// const newProgrammer = new Programmer('Dima')

// newProgrammer.writeCode()

//TODO Properties of objects

// const dog = {
//     name: 'max',
//     age: 3,
//     eye: 'blue'
// }


// const keys = Object.keys(dog) //  Made an Array of a Keys properties of an object dog (name age eye)
// // console.log(keys)

// const values = Object.values(dog) //  Made an Array of a Values of keys properties of an object dog (max 3  blue)
// // console.log(values)

// const entries = Object.entries(dog) // [ [ 'name', 'max' ], [ 'age', 3 ], [ 'eye', 'blue' ] ] made array like this
// // console.log(entries)

// for (const key of Object.keys(dog)){
//     console.log(key)
// } //and so on

//TODO CLONING AN OBJECT

// let a = {value: 20}

// 1. let b = { ...a} // the same copying

// 2. let b = {}
// // Object.assign(b, a) copying

// b.value = 111111;

// console.log(a)
// console.log(b)



