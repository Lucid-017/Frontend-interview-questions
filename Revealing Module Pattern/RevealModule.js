//revealing module pattern
//Turn this object literal into a module that only exposes the render method
// NOTE Using the "immediately invoked function expression" or IIFE for short
let  myModule =(function(){
    let _data=[];
    let _render = function(){
      /*eg : click listeners for _add and _remove */
    };
    let _add =function(){
      /*eg : _data.push('some value') */
    };
    let _remove = function(){
      /*eg : _data.pop('some value') */
    };
    return{
        render: _render
    }
    /*the way the REVEAL works is that all 
    these declared inside this function
    cease to exist after it has finised running
    to be able to use them afterward we have to return something
    from the function 
      */
})()
// the call the method
myModule.render();

// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// }; 

/*NOTE first of,A "pattern" is an approach to take when writing code
they are good amoung of design patterns to take,this is one of them
"module" is a self contained code
"Revealing" is then accesing those codes from the outside
  */