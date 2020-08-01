import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter{

    constructor(
        private recepient: string,
        readonly details: string,
        private amount: number
    ){}

    format() {
        // this.details = 'Change task'; //Read only access inside Class as well
        return `${this.recepient} is owed Rs.${this.amount} for ${this.details}`;
    }
}