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