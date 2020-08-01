"use strict";
// Generics
// Refer Net Ninja Youtube
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Sid', age: 24 });
// console.log(docOne);
// let docTwo = addUID('Hello Sid'); Error because <T> is extending object type
// console.log(docTwo);
// #######################################################################################
// Generics with Interfaces
// interface Resources<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resources<string> = {
//     uid: 14,
//     resourceName: 'Oracle',
//     data: 'Sid Marker'
// }
// const docFour: Resources<string[]> = {
//     uid: 23,
//     resourceName: 'MySQL',
//     data: ['fsdfs', 'dsfsf', 'dfsdf']
// }
// console.log(docThree, docFour);
// ############################################################################################
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docFive = {
    uid: 24,
    resourceName: ResourceType.DIRECTOR,
    data: 'Testing enums'
};
// console.log(docFive);
// ################################################################################################
// Tuples
let arr = ['Ryu', 1234, true];
// We can change the content and index values
let tup = ['Sid', 1998, false];
tup[0] = 'Yoshi Ryu';
