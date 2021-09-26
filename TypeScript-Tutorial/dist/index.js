"use strict";
//Basic types
let id = 5;
let company = "kayan healthcare";
let published = false;
let x = 5;
x = "ayman";
let age;
age = 24;
let ids = [1, 2, 3, 5];
let arr = [1, true];
//Tuple
let person = [1, "a", false];
//Tuple array
let employ;
employ = [
    [1, "ayman"],
    [2, "ahmad"]
];
//Union
let pid;
pid = 22;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "john"
};
// type Assertion
let cid = 1;
// let cusomterId=<number>cid
let cusomterId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5,3));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "john",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ayman = new Person(24, "ayman");
console.log(ayman.register);
//Genenrics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["ayman", "majdi"]);
numArray.push(1);
