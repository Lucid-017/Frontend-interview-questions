// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

let a = {
    a: 123
};[a].forEach(function (x) {
    console.log(x)
})



/*this code will throw an error simply because its not separated by a semicolon
this is because javascript reads it as one line of code
like so 
/let a; //undefined
/a={a:123}[a].forEach(function(x){}) 
the code is running a forEach function for the variable which is still undefined
if u defined an object variable and the next line is a [] syntax
then javascript will assumed u are still working the same line of code
*/



/*NOTE a  good example of the code will be this, uncomment this and play with it
let obj ={a:123,b:432};
[obj].forEach(function(x){
    console.log(x)
})*/
