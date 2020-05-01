# table of contents
## 1. [data types & structures](#data-structures)
### 1.1. [primitives](#data-structures)
### 1.2. [null](#null)
### 1.3. [objects](#objects)
### 1.4. [functions](#functions)
## 1. [data structures](#data-structures)
## 1. [data structures](#data-structures)
## 1. [data structures](#data-structures)

main JavaScript concepts
- Lexical Structure
- Expressions
- Types
- Variables
- Functions
- this
- Arrow Functions
- Loops
- Scopes
- Arrays
- Template Literals
- Semicolons
- Strict Mode
- ECMAScript 6, 2016, 2017

asynchronous programming

- Asynchronous programming and callbacks
- Timers
- Promises
- Async and Await
- Closures
- The Event Loop
    - The call stack is a LIFO queue (Last In, First Out).
    - The event loop continuously checks the call stack to see if there's any function that needs to run.
- Message Queue
    - when setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue
    - The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.
    - The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue
    - ES6 job queue for promises
    - A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate. A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.


# data types & structures <a id="data-structures"></a>

Reference:
* by value (primitive types)
* storing data by reference (non-primitive types i.e. objects, functions, arrays, etc.)

## primitives <a id="primitives"></a>

1. undefined : typeof instance === "undefined"
2. Boolean : typeof instance === "boolean"
3. Number : typeof instance === "number"
4. String : typeof instance === "string"
5. BigInt : typeof instance === "bigint"
6. Symbol : typeof instance === "symbol"

## null <a id="null"></a>

* null : typeof instance === "object". Special primitive not used as a data value
* Almost every constructed instance ends with null at the end of Prototype Chain

## objects <a id="objects"></a>

*  Object : typeof instance === "object". Special non data but Structural type for any Constructed instance: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;



## functions <a id="functions"></a>

* Function : typeof instance === "function". Special shorthand for Functions, though every Function constructor is derived from Object constructor.
* everytime a function is invoked, new execution context is created
* higher-order functions - functions that accept a function as input or return a function on output

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
        count: () => n++,
        reset: () => n = 0
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

* JavaScript `Array` class is a global object that is used in the construction of arrays; which are high-level, list-like objects
* neither the length of a JavaScript array nor the types of its elements are fixed
* using an invalid index number returns `undefined`

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
