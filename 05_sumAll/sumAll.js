const sumAll = function(lowInt, highInt) {
    varResult = 0
    if (lowInt < 0 || highInt < 0) {
        return 'ERROR';
    }
    else if (typeof lowInt !== 'number' || typeof highInt !== 'number') {
        return 'ERROR';
    }
    else {
        let start = Math.min(lowInt, highInt);
        let end = Math.max(lowInt, highInt);
        for (let i = start; i <= end; i++) {
            varResult += i;
        }
        return varResult;
    }
};

// Do not edit below this line
module.exports = sumAll;
