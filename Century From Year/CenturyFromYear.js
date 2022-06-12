function centuryFromYear(year){
    // given the year eg 1900 return the century 19
    // return year/100;
//but for years like 1905 would return an incorrect century
// so we have to round up these type of numbers to the smallest integer greater than or equal to a number using the Math.ceil
    return Math.ceil(year/100)
}

console.log(centuryFromYear(1205))