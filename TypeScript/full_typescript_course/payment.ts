// Exporting and importing modules 

// After making another separate files of code if we want to import the another file code in this code we use export and import for example

export function addPayment(val: number) {
    console.log(val);
}
export function getDetails() { }

// Default exports

// If we want to import class from another file code to current code we used default export for example 

export default class Gpayment {
    constructor(public price: number) { }
}