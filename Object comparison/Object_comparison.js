/***
 * What will be the output of this code and why?
 */
let obj = { a: 1 };
let objb = { a: 1 };


if ({ a: 1 } === { a: 1 }) {//false
    /*why would this be false?
    because they look thesame the are store in differnt two differnt places
    in memory,so that makes them two completely separate objects */
  console.log("Monday");
} else if ({ a: 1 } == { a: 1 }) {
    /*why would this be false?
     same reason as the first*/
  console.log("Tuesday");
} else if (obj == { a: 1 }) {
     /*why would this be false?
     they are both objects but are not the same thing*/
  console.log("Wednesday");
} else if (obj == objb) {
     /*why would this be false?
     tehy are two differnt objects with differnt names
     the fact that they are both objects doesnt matter when u try to compare them*/
  console.log("Thursday");
} else if (Object.is(obj, objb)) {
     /*why would this be false?
     the Object method has an attribute called 'is' where u can compare items
     this could simply means (obj ==objb)*/
  console.log("Friday");
} else {//true
  console.log("Saturday");
}

// if you want to actually compare objects
// you can check if there are the same type (using he typeof command)
// you can check if the have the same prototype
// you can check if the object length is the same (using the keys method that checks the object properties and compare )

/*so they are a bunch of things to check before two objects are equivalent to each other
 you cannot compare objects with any combination of operators or Object.is
 because if they are different objects,thats exactly what they'll remain*/