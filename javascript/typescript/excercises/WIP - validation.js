function () { }
[];
var currentInputValues = {
    firstName: 'm',
    lastName: 'f',
    zipCode: 'ukato',
    state: 'ARS' //must be exactly 2 chars
};
var atLeastTwoChars = function (str) {
    return str.length >= 2 ? "" : "must be at least 2 chars";
};
var exactlyTwoChars = function (str) {
    return str.length == 2 ? "" : "must be exactly 2 chars";
};
var exactlyFiveChars = function (str) {
    return str.length == 5 ? "" : "must be exactly 5 chars";
};
var inputCriteria = {
    firstName: [atLeastTwoChars, exactlyFiveChars],
    lastName: [atLeastTwoChars],
    zipCode: [exactlyFiveChars],
    state: [exactlyTwoChars]
};
var getErrorMessages = function (inputs, criteria) {
    var output = {};
    for (field in inputs) { // alternatively: Object.keys(inputs).forEach(field => { but it's wayy less elegant
        // console.log(`FOR loop processing ${field} from ${JSON.stringify(inputs)}`)
        output[field] = criteria[field].reduce(function (acc, getValidationMessage) {
            // console.log(`  REDUCE processing ${getValidationMessage.name}`);
            // console.log(`    validation message: ${getValidationMessage(inputs[field])}`)
            var validationMessage = getValidationMessage(inputs[field]);
            if (validationMessage)
                acc.push(validationMessage);
            return acc;
        }, []);
    }
    return output;
};
console.log(getErrorMessages(currentInputValues, inputCriteria));
