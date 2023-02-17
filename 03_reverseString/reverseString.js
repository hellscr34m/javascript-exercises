const reverseString = function reverseString(str) {
    let brokenString = str.split('');
    let varResult = '';
    for (let i = brokenString.length - 1; i >= 0; i--) {
        varResult += brokenString[i];
    }
    return varResult;
};


// Do not edit below this line
module.exports = reverseString;
