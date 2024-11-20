/* 
BASIC TYPES 
1) Primitive types (number, string, boolean)
2) Arrays
3) Tuples
4) Enums
5) Any, Unknown, Void, Null, Undefined, Never

*/

/* () {} [] 
    if we used any of thes brackets then it's value is reference
    if there is not any bracket is used then it is primitive
*/

// NUMBER STRING AND BOOLEAN
let a = 12; //numbers
let b = 'Sami'; //string
let c = true; //boolean

// Arrays
let arr = [1, 2, 3, 4, 5];

//Tuples
// it is used to define the values of array or anything in same positipn also if we try to change the position then it show the error for example
let array: [string, number] = ["Sami", 43]
let array2: [number, string] = [100, "Sami"]

//Enums also known as "Enumerations" it is used to hold the set of values for example 

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

// Any, Unknown, Void, Null, Undefined, Never
// any if we dont define the type of variable it is "any" for example
let i;

// how to define the type of any variable 
let v: number;
v = 44;

// Unknown
/* 
In unknown we can use like can any but first we want to say it's type for example
*/
let u: unknown;
u = 12;
u = "sami";

if (typeof u === "string")
    u.toUpperCase();

// Void 
// If a function doesn't return anything then its type is void for example
function abcd(): void {
    console.log("Hey");
}

// Null 
// If we say data base to find a person whos's name is sami and he is owner of a cafe then it find if he didnt find anything then its type is null for example
let n = null;

let m: string | null;
m = "sami";
m = null;

// Undefined
// if we dont give value to the variable then it's type is undefined for example
let f: undefined;

// Never 
/* 
If a fuction never return anything like loop for it type is never for example 
*/

function efg(): never {
    while (true) { }
}

efg();
console.log("Hey");

/*
   Type Inference
   Understanding type inference
   Type annotations
*/

// Inference if we dont give any type to the function or variable then it is Inference for example


let k = 12;

// Annotations if we add semicolon : and define its type then it is annotations for example

let y: number;

/*
   //Interfaces and Type Aliases
   //Definin interfaces
   //Using interfaces to define objects shapes
   //Extending Interfaces
   //Type Aliases
   //Intersection
*/
// it is help to define structure or shape of an object
interface User {
    name: string,
    email: string,
    password: string,
    gender?: string //if we dont want to give some details like gender we used question mark
}

function hij(obj: User) { }

hij({ name: "sami", email: "sami@gmail.com", password: "abcd123" });

// Extending Interfaces
interface User {
    name: string,
    email: string,
    password: string,
}

interface Admin extends User {
    admin: boolean,
    // It means that the same face also has like use but admin has extra property that is admin
}

//Type Aliases

// If we want to descripe a function type that is big then we use "type" it can define a short type name to any type for example
type argument = null | string | number;

function uij(obj: argument) {

};

uij("Sami");

//Intersection Types

let s: string | null; //This (|) is called Union

/*
  // Classes and Objects
  // Class defination
  // Constructors
  // Access modifiers (public, private, protected)
  // Readonly properties
  // Optional properties
  // Parameter properties
  // Getter and setters
  // Static members
  // Abstract classes and methods
*/

// To make classes we used (class) and it's name for example

class Device {
    name = "lg";
    price = 4000;
    category = "digital";
}

let d1 = new Device();
let d2 = new Device();

// Constructors

class BottelMaker {
    constructor(public name: string, public price: number) { }
}

let b1 = new BottelMaker("Milton", 1400);

class Music {
    constructor(public name: string, public artist: string, public thumbnail: string = "anything.png", public length: number, public free: boolean) {
        if (!thumbnail) {
            this.thumbnail = "anything.png";
        }
    }
}

let m1 = new Music("HELLO WORLD", "Sami", "", 1200, true)

// Access modifiers

class ShoesMaker {
    constructor(private name: string) {
        this.name = name;
    }

    changing() {
        this.name = "sami";
    }
}

let s1 = new ShoesMaker("Nike")

/* 
   Public
   .We can access anywhere without any restrictions.

   Private
   .We can access class members but we can't access outside the containing class
   
   Protected
   .We can access class members in other extend classes but not outside
*/

class GlassMaker {
    protected name = "milton";
}

class MetalGlassMaker extends GlassMaker {
    public material = "glass";

    changeName() {
        this.name = "some other name"
    }
}

let g1 = new MetalGlassMaker();
g1.changeName();

// Readonly properties
// If we dont want to change the name we used "readonly" propertie it give error if we try to change the name

class Member {
    constructor(public readonly name: string) { }
}

let u1 = new Member("sami");

// Optional properties
// If we make a function and ask for his any one detail and user is not want to give it then we used optional properties to use optional properties make a question mark before the detail which is optional for example

class Optional {
    constructor(public name: string, age: number, public gender?: string) { }
}

let o1 = new Optional("sami", 4);

// Parameter properties
// If we add variable and it's value in consructor then it is calles Parameter properties for example 

class Use {
    constructor(public name: string, public age: number) { }
}

let ue1 = new Use("sami", 14);

// Getter and setters

// If we make a function which is return a name it is known as getter to make getter we used "get"

// If we want to give value to function we used setters it take value form the user and set the value to make setters we used "set"

//For example 

class Used {
    constructor(public _name: string, public age: number) { }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this.name = value
    }
}

let ud1 = new Use("sami", 14);

// Static members

// If we want to accessed without classes we used static for example

class Hero {
    static version = 1.0;

    static getRandomNumber() {
        return Math.random();
    }
}

// Abstract classes and methods

class Payment {
    constructor(protected amount: number, protected account: number) { }
    isPaymentValid(amount: Number) {
        return this.amount > 0;
    }
}

class Paytm extends Payment { }

/* 
  // Functions
  // Function types
  // Optional and default parameters
  // Rest parameters
  // Overloads
*/

// Function types

function abcdef(name: string, age: number, cb: (arg: string) => void) {
    cb("hey");
}

abcdef("sami", 16, (arg: string) => {
    console.log(arg);
})

// Optional and default parameters

// In optional parameters we used question mark (?) to make it optional for example

function abcde(name: string, age: number, gender?: string) { }

abcde("sami", 16, "male");
abcde("nothing", 25)

// Default parameters

// In default parameters we already defined the value for example

function abc(name: string, age: number, gender: string = "not to be disclosed") {
    console.log(name, age, gender);
}

abc("sami", 16, "male");
abc("not", 52);

// Rest parameters

// In rest parameters we used (...) it means it make array of that function for example

function sum(...arr: number[]) {
    console.log(arr);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Overloads

// In typescript function overload is used to make a function that accepts different kinds of arguments

function ab(a: string): void;
function ab(a: string, b: number): number;

function ab(a: any, b?: any) {
    if (typeof a === "string" && typeof b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else throw new Error("Something is wrong please check it again");
}

ab("hey");
ab("hey", 4);

/* 
  // Generics
  // Generic functions
  // Generic interfaces
  // Generic classes
*/

// Generic functions

// Generic function is type of function that can work with any data type to use generic function after function name we make html brackets and deffine a leter <T> for example

function bcd<T>(a: T) { };

bcd<string>("sami");
bcd<number>(4);

// Generic interfaces

// Generic interface is used to create an interface that can work with different types while maintaining type safety for example

interface Halua<T> {
    name: string,
    age: number,
    key: T;
};

function bcde(obj: Halua<string>) { };

bcde({ name: "sami", age: 25, key: "nothing" });

// Generic classes

// Generic classes is used to create an differnt types while maintaining type safety for example

class CarMaker<T> {
    constructor(public key: T) { }
}

let c1 = new CarMaker<string>("hey");
let c2 = new CarMaker<number>(4);

console.log(c1, c2);

/*
  // Modules
  // Exporting and importing modules
  // Default exports
*/

// Modules means the separate files

// Exporting and importing modules 

// After making another separate files of code if we want to import the another file code in this code we use export and import for example

import { getDetails, addPayment } from "./payment";

addPayment(12);

// Default exports

// If we want to import class from another file code to current code we used default export for example 

import Gpayment from "./payment";

let gp1 = new Gpayment(100);
let gp2 = new Gpayment(120);
console.log(gp1, gp2);

/*
  // Type Guards and TypeScript Utility Types
  // Using typeof and instanceof
  // Partial, Required, Readonly
*/

// Type Guards and TypeScript Utility Types

// Type of guards it is used if we dont sure what is the type of the value to use we make if else statement for example

function bcdef(arg: string | number) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("Something went worng");
    }
}

console.log(bcdef(14));
console.log(bcdef("Hello"));