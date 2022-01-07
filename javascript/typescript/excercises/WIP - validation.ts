interface InputCriteria {
    key: value: function[]
}

const currentInputValues : object = {
    firstName: 'm', //must be at least 2 chars
    lastName: 'f', //must be at least 2 chars
    zipCode: 'ukato', //must be exacty 5 chars
    state: 'ARS' //must be exactly 2 chars
}

const atLeastTwoChars : string = (str) => {
    return str.length >= 2 ? "" : "must be at least 2 chars";
}

const exactlyTwoChars : string = (str) => {
    return str.length == 2 ? "" : "must be exactly 2 chars";
}

const exactlyFiveChars : string = (str) => {
    return str.length == 5 ? "" : "must be exactly 5 chars";
}

const inputCriteria = {
    firstName: [atLeastTwoChars, exactlyFiveChars],
    lastName: [atLeastTwoChars],
    zipCode: [exactlyFiveChars],
    state: [exactlyTwoChars]
}

const getErrorMessages : object = (inputs, criteria) => {
    let output = {};
     for (field in inputs) { // alternatively: Object.keys(inputs).forEach(field => { but it's wayy less elegant
        // console.log(`FOR loop processing ${field} from ${JSON.stringify(inputs)}`)
        output[field] = criteria[field].reduce((acc, getValidationMessage) => {
            // console.log(`  REDUCE processing ${getValidationMessage.name}`);
            // console.log(`    validation message: ${getValidationMessage(inputs[field])}`)
            let validationMessage = getValidationMessage(inputs[field]);
            if (validationMessage) acc.push(validationMessage);
            return acc;
        }, [])
    }
    return output;
}

console.log(getErrorMessages(currentInputValues, inputCriteria));