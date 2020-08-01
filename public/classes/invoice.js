export class Invoice {
    // private client: string;
    // readonly details: string; //Will allow only read access, but cannot change the value
    // private amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // ****Only to be used when there are access modifiers present****
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.details = 'Change task'; //Read only access inside Class as well
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}
