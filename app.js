"use strict";
//string
var myName = 'shubham';
//myName = 20;
//number
var myage = 20;
//myage='shubham';
//boolean
var hashobbies = false;
//hashobbies='1';
//assign types
var myrealage;
myrealage = 27;
//myrealage='27';
//array
var hobbies = ["cooking,sports"];
hobbies[100];
//hobbies ='100';
// tuples
var address = ["superstreet", 90];
//enum
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["black"] = 1] = "black";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var mycolor = color.green;
console.log(mycolor);
