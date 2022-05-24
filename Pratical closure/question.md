## practically apply solutions with closures when loops are involved.

### Closure is happening when you use a variable inside of a function,the function is going to run later and the variables inside the function are coming from outside of the function,they are coming from the sam scope the function was create

### Example function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);}