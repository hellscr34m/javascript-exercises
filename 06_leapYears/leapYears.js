const leapYears = function(myYear) {
    if (isDivisibleBy(myYear, 100)) {
        if (isDivisibleBy(myYear,400)) {
            return true;
        }
        else
            return false;
    }
    else if (isDivisibleBy(myYear,4)) {
        return true;
    }
    else return false;
};
function isDivisibleBy(number, divisor) {
    return number % divisor === 0;
}

// Do not edit below this line
module.exports = leapYears;
