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

const secondObject = Object.assign({}, firstObject, { secondProp: "ipsum"})

console.info("secondObject: \n", secondObject);

const thirdObject = { ...firstObject, secondProp: "dolor", thirdProp[0].one: "pietruszka" }

console.info("thirdObject: \n", thirdObject);