"use strict";
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// character = 'luigi';
// age = 40;
// isBlackBelt = true;
// // isBlackBelt = 'true';
// // will give NaN
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };
// // console.log(circ('hello'));
// console.log(circ(124));
// // ##################################
// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('ryu');
// // names.push(23);
// // names[0] = true;
// let numbers = [10, 20, 30, 40];
// numbers.push(123);
// // number.push('qaszi');
// // numbers = 'sid';
// // array can contain different data types during declaration
// let mixed = ['ken', 45, 'ryu', 8, 9, true];
// mixed.push(123);
// mixed[0] = 78;
// // can change string to number
// //objects:
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = 'yoshi';
// // age has to be a number
// // ninja.skills = ['fighting', 'sneaking'];
// // cannot add additional properties
// // ninja = {
// //     name: 'yoshi',
// //     belt: 'orange',
// //     age: 40,
// //     skills: ['sneaking', 'fighting']
// // };
// ##############################################
// // explicit types:
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 30;
// // isLoggedIn = 0;
// isLoggedIn = true;
// // Arrays:
// let ninjas: string[] = [];
// ninjas.push('ryu');
// console.log(ninjas);
// // Union types
// let mixed: (string|number|boolean)[] = [];
// // can store string and number
// mixed.push(13);
// mixed.push(true);
// mixed.push('sid');
// console.log(mixed);
// let uid: string|number;
// // no need for parenthesis for variable
// uid = 123;
// uid = 'sid';
// // Objects
// let ninjaOne: object;
// ninjaOne = {
//     name: 'ryu',
//     age: 30
// };
// // can redeclare object as array
// ninjaOne = [];
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// };
// ninjaTwo = {
//     name: 'ryu',
//     age: 30,
//     beltColour: 'red'
// };
// ################################################
// dynamic type
// let age: any = 25;
// console.log(age);
// age = 'ryu';
// console.log(age);
// age = true;
// console.log(age);
// age = {
//     name: 'luigi'
// };
// console.log(age);
// let mixed: any = [];
// mixed.push(5);
// mixed.push(true);
// console.log(mixed);
// let ninja: {
//     name: any,
//     age: any
// };
// ninja = {
//     name: 'yoshi',
//     age: 25
// };
// console.log(ninja);
// console.log('test');
// #################################################
// // Function basics
// // let greet = () => {
// //     console.log('Hello world');
// // };
// // greet();
// let greet: Function;
// greet = () => {
//     console.log('function basics');
// };
// // question mark means parameter is optional
// // 10 is the defualt parameter, no need to use ? then
// // put optional parameters at the end
// const add = (a: number, b: number, c: number|string = 10) => {
//     console.log(a + b);
//     console.log(c);
// }
// // return type is void
// add(123, 34);
// add(123, 4343, 'ryu');
// add(1233, 443);
// const minus = (a: number, b: number) => {
//     return a + b;
// }
// let result = minus(123, 43);
// // the return value will be the type the function returns
// // in this case number
// // result = 'sid';
// ##################################################
// Type Aliases
// Done to not repeat code
// type stringOrNumber= string|number;
// type obj = {name: string, uid: string|number};
// const logDetails = (uid: string|number, item: string) => {
//     console.log('${item} has a uid of ${uid}');
// }
// const mapDetails = (uid: stringOrNumber, item: string) => {
//     console.log('${item} has a uid of ${uid}');
// }
// const userDetails = (user: {name: string, uid: string|number}) => {
//     console.log('${name} has a uid of ${uid}');
// }
// const custDetails = (user: obj) => {
//     console.log('${name} has a uid of ${uid}');
// }
// #####################################################
// Function Signatures
// example 1
let greet;
greet = (name, greeting) => {
    console.log('${name} says ${greeting}');
};
greet('Sid', 'Hello');
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
calc(123, 345, 'add');
let logDetails;
logDetails = (ninja) => {
    console.log('${ninja.name} is ${ninja.age} years old');
};
logDetails({ name: 'Sid', age: 24 });
