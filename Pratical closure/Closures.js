// good closure  
function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}
// closure with a problem
function f2() {
    for (var i = 0; i < 3; i++) {//var scope starts here
        setTimeout(function () {
             console.log(i)
        }, 1000 * i);
    }
    // at this point i is going to be incremented to 3
}//var scope ends here
// this is supposed to print 0,1,2,3 but instead print 3,3,3
// why?
/* because the "i" variable was declared with a var and not a let
var are either globally scoped or scoped inside of its function
while let are scoped inside of curly braces*/ 
// f2()

