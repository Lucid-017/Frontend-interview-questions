let f = function (a, b) {
    //length is the property of the function that tell you how many things have been defined as a function parameter 
    arguments.length === f.length?console.log('we have a match'):console.log('No match')
    
};

//determine if the function received the number of params it expected
f(1);
f(1, 2);
f(1, 2, 3); 
// arguments refers to the number of parameters passed in 