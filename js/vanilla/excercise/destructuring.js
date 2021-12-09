let [a, b] = ["first", "second"];
console.log(a);

let o = {
    integer: 23,
    array: [1, 2, 3, 4, 5],
    object: {
        string: "hello from the nested side!"
    },
    muka: () => { return new.target; },
    bool: true
}

let { integer, array, object, muka, bool } = o;
console.log(integer, array, object, muka, bool);