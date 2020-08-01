// const anchor = document.querySelector('a');
// console.log(anchor);

// // console.log(anchor.href);
// // The typescript file is not sure if there is any data in the anchor tag as the typescript file does not have access to the index.html file
// // hence the error

// if(anchor) {
//     console.log(anchor.href);
// }

// Extracting the form

// HTML Form Element
// const form = document.querySelector('form');

// Typescript doesn't know what HTML Element it is, because the class name is given
// const form = document.querySelector('.new-item-form');

// It can be type casted to a certain type
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children);

// // Extract the input fields
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// // List the template instance
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     // this prevents page refreshing to default behaviour

//     let doc: HasFormatter;
//     if (type.value === 'Invoice') {
//         doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
//     } else {
//         doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
//     }

//     // console.log(
//     //     type.value,
//     //     toFrom.value,
//     //     details.value,
//     //     amount.valueAsNumber
//     // );

//     console.log(doc);
// });

// ##################################################################################


// class Invoice {
//     // private client: string;
//     // readonly details: string; //Will allow only read access, but cannot change the value
//     // private amount: number;

//     // constructor(c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }

//     // ****Only to be used when there are access modifiers present****

//     constructor(
//         private client: string,
//         readonly details: string,
//         private amount: number
//     ){}



//     format() {
//         // this.details = 'Change task'; //Read only access inside Class as well
//         return `${this.client} owes Rs.${this.amount} for ${this.details}`;
//     }
// }



// #########################################################################################



// // Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'Ryu',
//     age: 26,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('Ryu spent', amount);
//         return amount;
//     }
// };

// // console.log(me);

// const greetPerson = (person: IsPerson) => {
//     console.log('Hello', person.name);
// }
// greetPerson(me);



// ######################################################################################



// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Yoshi', 'Copyrighting', 35000);
// docTwo = new Payment('Timo', 'Database Fix', 120000);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// ###########################################################################################


// // Instantiate the class Invoice
// const invoiceOne = new Invoice('Mario', 'Copyrighting', 12000);
// const invoiceTwo = new Invoice('Yoshi', 'Backend Fix', 23000);

// // console.log(invoiceOne, invoiceTwo);

// let invoices: Invoice[] = [];
// // array containing elements of type Invoice class
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

// // invoiceOne.amount = 1200000; amount is not accessible outside Invoice class

// // console.log(invoices);

// invoices.forEach(inv => {
//     // console.log(inv.client, inv.details, inv.amount, inv.format());
//     // inv.details = 'Changed the task'; //Read only proerty
//     console.log(inv.format(), inv.details);
//     // since format is public, it can access the private properties of the Invoice class
// })

// ############################################################################################





import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Tuples
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];
    
    let doc: HasFormatter;
    if (type.value === 'Invoice') {
        
        // Using tuples, no need to repeat code
        // (...values) spreads the tuple
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);

    } else {
        
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);

    }

    list.render(doc, type.value, 'start');

});