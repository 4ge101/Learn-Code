"use strict";
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
let array = ["Sami", 43];
let array2 = [100, "Sami"];
//Enums also known as "Enumerations" it is used to hold the set of values for example 
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// Any, Unknown, Void, Null, Undefined, Never
// any if we dont define the type of variable it is "any" for example
let i;
// how to define the type of any variable 
let v;
v = 44;
// Unknown
/*
In unknown we can use like can any but first we want to say it's type for example
*/
let u;
u = 12;
u = "sami";
if (typeof u === "string")
    u.toUpperCase();
// Void 
// If a function doesn't return anything then its type is void for example
function abcd() {
    console.log("Hey");
}
// Null 
// If we say data base to find a person whos's name is sami and he is owner of a cafe then it find if he didnt find anything then its type is null for example
let n = null;
let m;
m = "sami";
m = null;
// Undefined
// if we dont give value to the variable then it's type is undefined for example
let f;
// Never 
/*
If a fuction never return anything like loop for it type is never for example
*/
function efg() {
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
let y;
function hij(obj) { }
hij({ name: "sami", email: "sami@gmail.com", password: "abcd123" });
function uij(obj) {
}
;
uij("Sami");
//Intersection Types
let s; //This (|) is called Union
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
    constructor() {
        this.name = "lg";
        this.price = 4000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
// Constructors
class BottelMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottelMaker("Milton", 1400);
class Music {
    constructor(name, artist, thumbnail = "anything.png", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "anything.png";
        }
    }
}
let m1 = new Music("HELLO WORLD", "Sami", "", 1200, true);
// Access modifiers
class ShoesMaker {
    constructor(name) {
        this.name = name;
    }
    changing() {
        this.name = "sami";
    }
}
let s1 = new ShoesMaker("Nike");
/*
   Public
   .We can access anywhere without any restrictions.

   Private
   .We can access class members but we can't access outside the containing class
*/ 
