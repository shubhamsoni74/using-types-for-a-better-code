//string
let myName:string = 'shubham';
//myName = 20;

//number
let myage:number =20;
//myage='shubham';

//boolean
let hashobbies:boolean=false;
//hashobbies='1';

//assign types
let myrealage:  number;
myrealage=27;
//myrealage='27';

//array
let hobbies:any[]=["cooking,sports"];
hobbies[100];
//hobbies ='100';

// tuples
let address:[string,number]= ["superstreet",90];

//enum
enum color{
    green,//0
    black,//1
    blue//2
}
let mycolor:color=color.green;
console.log(mycolor);

//any
let car:any="BMW";
console.log(car);
car={brand:"BMW",series:3};
console.log(car);

//functions
function returnmyname();string{
return myname;
}
console.log(returnmyname());

//void
function sayhello():void{
    console.log("Hello!");
}

//argument types
function multiply(value1:number,value2:number):number{
    return value1*value2;
}
//console.log(multiply(2,'shubham'));
console.log(multiply(10,2));

//function types
let mymultiply:(a:number,b:number) => number;
//mymultiply=sayhello;
//mymultiply();
mymultiply=mymultiply;
console.log(mymultiply(5,2));

//objects
let userdata:{ name:string,age:number}={
    name:"shubham",
    age:27
};

//complex object
let complex:{data:number[],output:(all:boolean)=> number[] } = {
data:[100,10,2.22],
output:function(all:boolean):number [] {
   return this.data;
  }
};

//complex ={};
//type alias
type complex={data:number[],output:(all:boolean)=> number[] }
let complex2:complex={
    data:[100,10,2.22],
    output:function(all:boolean):number [] {
       return this.data;
   }
 };

 

