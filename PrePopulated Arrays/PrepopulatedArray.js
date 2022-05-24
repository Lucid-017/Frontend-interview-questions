/**Create an array that is prepopulated
 * With 5 random Numbers
 */

//version 1
let a1 =Array.from({length:5},n=>Math.floor( 5 * Math.random()))
//this allows you to pass in another array
// it takes in two parameters (a property, map function)
// where u can pass in array like structure and its going 
// to create a brand new array and if u put an array it will create a shallow instance of an array 
console.log('1', a1);

//version 2 alternative
let a2 = new Array(5).fill(2).map(n=> n*  Math.floor( 5 * Math.random()))
console.log('2', a2);
// new Array(5) creates a new array and takes in the length of the array
// then .fill()this takes in whatever you want to fill the array with
// it could be anytin,undefined,null,str etc 