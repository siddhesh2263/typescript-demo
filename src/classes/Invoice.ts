import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter{
    // private client: string;
    // readonly details: string; //Will allow only read access, but cannot change the value
    // private amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    // ****Only to be used when there are access modifiers present****

    constructor(
        private client: string,
        readonly details: string,
        private amount: number
    ){}



    format() {
        // this.details = 'Change task'; //Read only access inside Class as well
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}