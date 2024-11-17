/*
BASIC TYPES
1) Primitive types (number, string, boolean)
2) Arrays
3) Tuples
4) Enums
5) Any, Unknown, Void, Null, Undefined, Never

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* () {} []
    if we used any of thes brackets then it's value is reference
    if there is not any bracket is used then it is primitive
*/
// NUMBER STRING AND BOOLEAN
var a = 12; //numbers
var b = 'Sami'; //string
var c = true; //boolean
// Arrays
var arr = [1, 2, 3, 4, 5];
//Tuples
// it is used to define the values of array or anything in same positipn also if we try to change the position then it show the error for example
var array = ["Sami", 43];
var array2 = [100, "Sami"];
//Enums also known as "Enumerations" it is used to hold the set of values for example 
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// Any, Unknown, Void, Null, Undefined, Never
// any if we dont define the type of variable it is "any" for example
var i;
// how to define the type of any variable 
var v;
v = 44;
// Unknown
/*
In unknown we can use like can any but first we want to say it's type for example
*/
var u;
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
var n = null;
var m;
m = "sami";
m = null;
// Undefined
// if we dont give value to the variable then it's type is undefined for example
var f;
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
var k = 12;
// Annotations if we add semicolon : and define its type then it is annotations for example
var y;
function hij(obj) { }
hij({ name: "sami", email: "sami@gmail.com", password: "abcd123" });
function uij(obj) {
}
;
uij("Sami");
//Intersection Types
var s; //This (|) is called Union
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
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 4000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
// Constructors
var BottelMaker = /** @class */ (function () {
    function BottelMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottelMaker;
}());
var b1 = new BottelMaker("Milton", 1400);
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "anything.png"; }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "anything.png";
        }
    }
    return Music;
}());
var m1 = new Music("HELLO WORLD", "Sami", "", 1200, true);
// Access modifiers
var ShoesMaker = /** @class */ (function () {
    function ShoesMaker(name) {
        this.name = name;
        this.name = name;
    }
    ShoesMaker.prototype.changing = function () {
        this.name = "sami";
    };
    return ShoesMaker;
}());
var s1 = new ShoesMaker("Nike");
/*
   Public
   .We can access anywhere without any restrictions.

   Private
   .We can access class members but we can't access outside the containing class
   
   Protected
   .We can access class members in other extend classes but not outside
*/
var GlassMaker = /** @class */ (function () {
    function GlassMaker() {
        this.name = "milton";
    }
    return GlassMaker;
}());
var MetalGlassMaker = /** @class */ (function (_super) {
    __extends(MetalGlassMaker, _super);
    function MetalGlassMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "glass";
        return _this;
    }
    MetalGlassMaker.prototype.changeName = function () {
        this.name = "some other name";
    };
    return MetalGlassMaker;
}(GlassMaker));
var g1 = new MetalGlassMaker();
g1.changeName();
// Readonly properties
// If we dont want to change the name we used "readonly" propertie it give error if we try to change the name
var Member = /** @class */ (function () {
    function Member(name) {
        this.name = name;
    }
    return Member;
}());
var u1 = new Member("sami");
// Optional properties
// If we make a function and ask for his any one detail and user is not want to give it then we used optional properties to use optional properties make a question mark before the detail which is optional for example
var Optional = /** @class */ (function () {
    function Optional(name, age, gender) {
        this.name = name;
        this.gender = gender;
    }
    return Optional;
}());
var o1 = new Optional("sami", 4);
// Parameter properties
// If we add variable and it's value in consructor then it is calles Parameter properties for example 
var Use = /** @class */ (function () {
    function Use(name, age) {
        this.name = name;
        this.age = age;
    }
    return Use;
}());
var ue1 = new Use("sami", 14);
// Getter and setters
// If we make a function which is return a name it is known as getter to make getter we used "get"
// If we want to give value to function we used setters it take value form the user and set the value to make setters we used "set"
//For example 
var Used = /** @class */ (function () {
    function Used(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Used.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Used;
}());
var ud1 = new Use("sami", 14);
// Static members
// If we want to accessed without classes we used static for example
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.getRandomNumber = function () {
        return Math.random();
    };
    Hero.version = 1.0;
    return Hero;
}());
// Abstract classes and methods
var Payment = /** @class */ (function () {
    function Payment(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    Payment.prototype.isPaymentValid = function (amount) {
        return this.amount > 0;
    };
    return Payment;
}());
var Paytm = /** @class */ (function (_super) {
    __extends(Paytm, _super);
    function Paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paytm;
}(Payment));
/*
  // Functions
  // Function types
  // Optional and default parameters
  // Rest parameters
  // Overloads
*/
// Function types
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("sami", 16, function (arg) {
    console.log(arg);
});
// Optional and default parameters
// In optional parameters we used question mark (?) to make it optional for example
function abcde(name, age, gender) { }
abcde("sami", 16, "male");
abcde("nothing", 25);
// Default parameters
// In default parameters we already defined the value for example
function abc(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
abc("sami", 16, "male");
abc("not", 52);
// Rest parameters
// In rest parameters we used (...) it means it make array of that function for example
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
