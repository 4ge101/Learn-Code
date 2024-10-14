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
let u;
u = 12;
u = "sami";
