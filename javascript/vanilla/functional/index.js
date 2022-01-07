const prettyPrint = (statement) => {
    console.log(statement + ':', eval(statement));
}

//how to declare a function?

//function keyword
const f = function () {};
prettyPrint('typeof f');
prettyPrint('Object.getPrototypeOf(f)');

//arrow function
const g = () => {};
prettyPrint('typeof g');
prettyPrint('Object.getPrototypeOf(g)');

//function constructor
const h = new Function();

const hof = () => (p) => { return 2 * p }
prettyPrint('typeof hof');
prettyPrint('Object.getPrototypeOf(hof)');
prettyPrint('typeof hof()');
prettyPrint('Object.getPrototypeOf(hof())');
prettyPrint('typeof hof(2)(4)');
prettyPrint('Object.getPrototypeOf(hof(1)(3))');