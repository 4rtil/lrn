const map_for = (array, fn) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(fn(array[i]));
    }
    return output;
}

const map_foreach = (array, fn) => {
    let output = [];
    if (!array.forEach) {
        console.log('hm is that even an array chap?');
    } else {
        console.log('noice array mate! lemme do sum mappin');
        array.forEach(el => output.push(fn(el)));
    }
    return output;
}

const map_reduce = (array, fn) => 
    array.reduce((acc, el) => [
        ...acc,
        fn(el)
    ], []);

const fn = a => Math.pow(2, a);
const input = [1,2,3,4,5,6,7,8,9,10]
console.log(map_reduce(input, fn));