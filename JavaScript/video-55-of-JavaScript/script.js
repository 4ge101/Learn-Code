console.log("hey is this message going in the console?")

var a = 5; // var is used to make variables
// a = a + 1
let b = 10;
let c = "Hello World";
let _d = "sami";
let $e = "ali";

// console.log($e)
// console.log(_d)
// console.log(a + b + 5)
// console.log(typeof a, typeof b, typeof c, typeof _d, typeof $e) //it is used to know data type of variables

{
    // let a = 66; //first output is 66 and then 5 because let is blocked scoped if there is var except let then it's output comes 66 because it is global
    console.log(a)
}
console.log(a)
// const a1 = 5;
// a1 = a1 + 1;  //after apply const we cant cant change it's not allowed


let x = "Ali Sami"; // string
let y = 50; // number
let z = 4.44; // number
const p = true; // boolean
let q = undefined; // undefined
let r = null; // object

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Sami",
    "job code": 4000,
    "is_handsome": true
}

console.log(o);
o.salary = "10lakhs"; //this is used to add more object about this person
console.log(o);
o.salary = "crores";
console.log(o);