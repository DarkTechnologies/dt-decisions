module.exports = function (decisionTree) {
    function unknownDecision(decision) {
        console.log('Unknown "' + decision + '" command.');
        console.log('Possible arguments: ' + Object.getOwnPropertyNames(
            decisionTree).sort());
        process.exit(1);
    }

    function runDecision(decision, params) {
        if (!!decisionTree[decision]) {
            if (decisionTree[decision] instanceof Function) {
                return decisionTree[decision](params);
            } else {
                return decisionTree[decision];
            }
        } else {
            if (!decisionTree['unknown']) {
                unknownDecision(decision);
            } else {
                if (decisionTree['unknown'] instanceof Function) {
                    return decisionTree['unknown'](params);
                } else {
                    return decisionTree['unknown'];
                }
            }
        }
    }

    return function (decision, params) {
        if (!decision) { //blank decision
            return runDecision('default');
        } else {
            return runDecision(decision, params);
        }
    };
};
