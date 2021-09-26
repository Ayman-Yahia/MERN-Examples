//Basic types
let id:number=5;
let company:string="kayan healthcare"
let published:boolean=false
let x:any=5
x="ayman"
let age:number
age=24
let ids:number[]=[1,2,3,5]
let arr:any=[1,true]
//Tuple
let person:[number,string,boolean]=[1,"a",false]
//Tuple array
let employ:[number,string][]
employ=[
    [1,"ayman"]
    ,[2,"ahmad"]
]
//Union
let pid:string | number
pid=22
pid="22"
//Enum
enum Direction1{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}
//Objects
type user={
    id:number,
    name:string
}
const user ={
    id:1,
    name:"john"
}
// type Assertion
let cid:any=1
// let cusomterId=<number>cid
let cusomterId=cid as number
//Functions
function addNum(x:number,y:number):number{
    return x+y
}
// console.log(addNum(5,3));

function log(message:string|number):void{
    console.log(message);
    
}
// log("ayman")
//Interface
interface userInterface{
    readonly id:number,
    name:string,
    age?:number
}
const user1:userInterface ={
    id:1,
    name:"john",
    
}
// user1.id=5
// type Point=number|string
// const p1:Point=1
// console.log(p1);
interface MathFunf{
    (x:number,y:number):number
}
const add :MathFunf=(x:number,y:number):number =>x+y
const sub :MathFunf=(x:number,y:number):number =>x-y

//classes
class Person{
    id:number
    name:string
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    register(){
        return `${this.name} is now registered`
    }
}
const ayman =new Person(24,"ayman")
console.log(ayman.register);
//Genenrics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray=getArray<number>([1,2,3,4])
let strArray=getArray<string>(["ayman","majdi"])
numArray.push(1)