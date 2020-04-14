# table of contents
## 1. [data types & structures](#data-structures)
### 1.1. [primitives](#data-structures)
### 1.2. [null](#null)
### 1.3. [objects](#objects)
### 1.4. [functions](#functions)
## 1. [data structures](#data-structures)
## 1. [data structures](#data-structures)
## 1. [data structures](#data-structures)

# data types & structures <a id="data-structures"></a>

Reference:
* by value (primitive types)
* storing data by reference (non-primitive types i.e. objects, functions, arrays, etc.)

## primitives <a id="primitives"></a>

* undefined : typeof instance === "undefined"
* Boolean : typeof instance === "boolean"
* Number : typeof instance === "number"
* String : typeof instance === "string"
* BigInt : typeof instance === "bigint"
* Symbol : typeof instance === "symbol"

## null <a id="null"></a>

* null : typeof instance === "object". Special primitive not used as a data value
* Almost every constructed instance ends with null at the end of Prototype Chain

## objects <a id="objects"></a>

*  Object : typeof instance === "object". Special non data but Structural type for any Constructed instance: new Object, new Array, new Map, new Set, new WeekMap, new WeakSet, new Date and almost everything made with new keyword;



## functions <a id="functions"></a>

* Function : typeof instance === "function". Special shorthand for Functions, though every Function constructor is derived from Object constructor.

> everytime a function is invoked, new execution context is created

> higher-order functions - functions that accept a function as input or return a function on output

## currying

# closures

Steps:

1. create a parent function
2. define some variables in parent's local scope
3. define a child function inside the parent function
4. return that function inside the parent function

Example:

```javascript
const countClues = () => {
    let n = 0;
    return {
        count: () => n++;
        reset: () => n = 0;
    };
};

var counter = countClues();

counter.count(); //1
counter.count(); //2
counter.count(); //3
counter.reset(); //0
```

## callbacks

## promises

### destructuring

```javascript
let game = {
    "suspects": [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];

var [{color: col1}, {color: col2}] = game.suspects;
```

# arrays

> JavaScript `Array` class is a global object that is used in the construction of arrays; which are high-level, list-like objects

> neither the length of a JavaScript array nor the types of its elements are fixed

> using an invalid index number returns `undefined`

[array functional style](#array-exercise-intersection)


## exercise 1 - intersection <a id="array-exercise-intersection"></a>

Construct a function named intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce! 
```javascript
function intersection(...arrays) {
    //reduces an array of arrays to a single array...
    return arrays.reduce((accumulator, current, index, array) => { 
        //...by filtering initial item/array, and then accumulated value...
        return accumulator.filter((curr, id, arr) => {
            //...by items in the next array from the collection, ensuring no duplicates!
            return (current.includes(curr) && !(curr === arr[id + 1])) ? true : false;
        });
    });
}

console.log("Intersection [5, 15, 9]: " + intersection([5, 10, 99, 15, 20, 9], [15, 9, 88, 1, 99, 5, 7], [1, 10, 15, 5, 20, 9]));
console.log("Intersection [0]: " + intersection([0, 0, 0, 1, 1, 1], [0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0], [0], [1, 0, 0, 0]));
```

## exercise 2 - union

Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce! 
```javascript
function union(...arrays) {
    //reduces an array of arrays to a single array...
    return arrays.reduce((accumulator, current, index, array) => {
      current.forEach((curr, id, arr) => {
        (accumulator.includes(curr)) ? 'duplicate,next!' : accumulator.push(curr);
      });
      return accumulator
    }, []);
  }

  console.log('Union 1 [5, 10, 15, 88, 1, 7, 100]: ' + union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
  // should log: [5, 10, 15, 88, 1, 7, 100]
  
  console.log('Union 2 [0,1,10]: ' + union([0,7,7,7,0], [], [], [0,0,1,1,1,1,10,1,0], [0,0,0,0]));
```

## exercise 3 - each
Implement underscore's each function.
```javascript
var _ = {};

_.each = function(list, callback) {
    for (let item in list) {
        callback(item);
    }
};
```

# PATTERNS

## module pattern
## decorator pattern

# pending questions
1. looping through props of an object
2. are JS prototypes from OOP or FP?
