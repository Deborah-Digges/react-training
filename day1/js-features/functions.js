// variables need to be declared before usage
console.log(i);
var i = 0;

// function hoisting
hello("sam");
function hello(name) {
    console.log("hello:" + name);
}

// number and type of arguments don't matter

// functions can be treated as variables
var eat = function() {
    console.log("a");
};