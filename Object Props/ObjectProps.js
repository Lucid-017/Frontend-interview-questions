/**
 * What will be the output of the following console.log?
 */

let obj = {
    'a': 'three',
    b: 4,
    'c': "five",
    a: 3,
    'b': "four",
    "c": 'five',
    "a": "tre",
    "b": 'fyra',
    c: 5
};
console.log(obj);//{a:"tre",b:"fyra",c:5}
// why?
// this is because every prop defined in an object is read as a string by javascript
// doesnt matter if they are in quotes or not,they are saved as string keys with assigned values
// if u define repeat props like a,b and c ,your going to be left with whatever the final value for those
// so these {a:"tre",b:"fyra",c:5} will overwrite whatever came b4 it