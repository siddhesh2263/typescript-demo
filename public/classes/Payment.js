export class Payment {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.details = 'Change task'; //Read only access inside Class as well
        return `${this.recepient} is owed Rs.${this.amount} for ${this.details}`;
    }
}
