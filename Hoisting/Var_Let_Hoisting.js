//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
    // area =undefined
    // when var are hoisted they are assigned with undefined
    // name;
    // when let are hoisted they are not defined,not assigned any default value
     if(area !== undefined){
        console.log('var', area);//undefined
  
     }
     console.log('let', name);//reference Error
    let name = 'Bert';
    var area = 'Geology';
}
f();