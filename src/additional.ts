// Generics
// Refer Net Ninja Youtube

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}

let docOne = addUID({name: 'Sid', age: 24});
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

enum ResourceType { BOOK, AUTHOR, DIRECTOR, FILM, PERSON };

interface Resources<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docFive: Resources<string> = {
    uid: 24,
    resourceName: ResourceType.DIRECTOR,
    data: 'Testing enums'
}

// console.log(docFive);

// ################################################################################################



// Tuples

let arr = ['Ryu', 1234, true];
// We can change the content and index values

let tup: [string, number, boolean] = ['Sid', 1998, false];

tup[0] = 'Yoshi Ryu'