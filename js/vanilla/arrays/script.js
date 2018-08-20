e strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    let n = arr.length;
    let list = Array.from(arr.keys());
    
    //Create an array of arrays with removed 1 unique item
    for (let i = 0; i < n; i++) {
        list[i] = Array.from(arr);
        list[i].splice(i, 1);
    }
    
    let sum = [];
    
    list.forEach(function(element){
        sum.push(element.reduce((acc , curr) => acc + curr));
    });
    
    return Math.min(...sum) + " " + Math.max(...sum);
                
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

