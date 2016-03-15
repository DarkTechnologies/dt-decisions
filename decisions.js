module.exports = function (decisionTree) {
    function unknownDecision(decision) {
        console.log('Unknown "' + decision + '" command.');
        console.log('Possible arguments: ' + Object.getOwnPropertyNames(
            decisionTree).sort());
        process.exit(1);
    }

    function runDecision(decision) {
        if (!!decisionTree[decision]) {
            if (decisionTree[decision] instanceof Function) {
                return decisionTree[decision]();
            } else {
                return decisionTree[decision];
            }
        } else {
            unknownDecision(decision);
        }
    }

    return function (decision) {
        if (!decision) { //blank decision
            return runDecision('default');
        } else {
            return runDecision(decision);
        }
    };
};
