 /**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */
 
let palindrome = function (word) {
    /*where do u start?first break the word int two parts the first and last part
    if its a odd number of cahracters then ignore the middleone */
  let len = word.length;
  let start = word.substring(0,Math.floor(len/2))
  let end = word.substring(len - Math.floor(len/2))
//   take the last caharacters of the string and flip it
  let reverse = end.split('').reverse().join('')
//   the check if the first characters are the same with the end characters flipped
  return (start === reverse)
  console.log(start,end)
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('windmill')); //false