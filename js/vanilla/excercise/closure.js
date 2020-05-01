'use strict';

const count = () => {
    let n = 1;
    return {
        add: () => n++,
        reset: () => n = 0
    }
}

let counter = count();
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());