const repeatString = function repeatString(str, num) {
    let varResult = '';
    for (let i = 0; i < num; i++) {
        varResult += str;
    }
    if (num < 0) {
        return 'ERROR';
    }
    else {
        return varResult;
    }
};

// Do not edit below this line
module.exports = repeatString;
