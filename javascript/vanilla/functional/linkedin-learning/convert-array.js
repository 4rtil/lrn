const candidates = ["Andrzej", "Franciszek", "Mirosław", "Andrzej", "Homobomus", "Kilian", "Homobomus", "Homobomus", "Homobomus", "Kordian", "Andrzej", "Kilian", "Homobomus", "Franciszek", "Franciszek", "Andrzej", "Gerwazy", "Kilian", "Kilian", "Homobomus", "Kilian", "Andrzej", "Homobomus", "Andrzej", "Franciszek", "Homobomus"]

//my implementation :)
// console.log(
//     candidates.slice().reduce((acc, candidate) => {
//         if (acc.hasOwnProperty(candidate)) {
//             acc[candidate] += 1;
//         } else {
//             acc[candidate] = 1;
//         }
//         return acc;
//     }, {})
// );

//solution in the course
console.log(
    candidates.slice().reduce((acc, candidate) => ({
        ...acc,
        [candidate]: acc[candidate] ? acc[candidate] + 1  : 1 //why square brackets? it's called computed property names, introduced in ES2015
    }), {})
);