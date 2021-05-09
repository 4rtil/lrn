'use strict';

const firstObject = {
    "firstProp": 1,
    "secondProp": "lorem",
    "thirdProp": [
        {one: true},
        {two: false},
        {three: false}
    ]
}

//copy object using Object's assign method
const secondObject = Object.assign({}, firstObject, { secondProp: "ipsum"})
console.info("secondObject: \n", secondObject);

//copy object using spread operator
const thirdObject = { ...firstObject, secondProp: "dolor", thirdProp[0].one: "pietruszka" }
console.info("thirdObject: \n", thirdObject);