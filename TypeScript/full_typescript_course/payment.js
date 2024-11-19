"use strict";
// Exporting and importing modules 
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
// After making another separate files of code if we want to import the another file code in this code we use export and import for example
function addPayment(val) {
    console.log(val);
}
function getDetails() { }
// Default exports
// If we want to import class from another file code to current code we used default export for example 
class Gpayment {
    constructor(price) {
        this.price = price;
    }
}
exports.default = Gpayment;
