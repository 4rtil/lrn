//import words from 'an-array-of-english-words';
const words = require('an-array-of-english-words')

const getLetterCount = (word) => {
    return word.split('').reduce((acc, letter) => {
        return {
            ...acc,
            [letter]: acc[letter] ? acc[letter] + 1 : 1
        }
    }, {});
}

const findSameLetterCount = (firstWord, secondWord) => {
    const firstWordLetterCount = getLetterCount(firstWord);
    const secondWordLetterCount = getLetterCount(secondWord);
    return Object.keys(firstWordLetterCount).every(letter => {
        return letter in secondWordLetterCount && firstWordLetterCount[letter] == secondWordLetterCount[letter];
    });
}

const findAnagrams = (word, allWords) => {
    return allWords.filter( str => {
        return str != word && str.length == word.length && findSameLetterCount(str, word)
    });
}

//tests
console.log(
    "function getLetterCount works: ",
    JSON.stringify(getLetterCount('antananarywa')) === JSON.stringify({ a: 5, n: 3, t: 1, r: 1, y: 1, w: 1 }) &&
    JSON.stringify(getLetterCount('muka')) === JSON.stringify({ m: 1, u: 1, k: 1, a: 1 }),
    "\nfunction findSameLetterCount works: ",
    findSameLetterCount('cinema', 'anemic') &&
    findSameLetterCount('iceman', 'cinema'),
    "\nfunction findAnagrams works:",
    "\ncinema", findAnagrams("cinema", words),
    "\ncurse", findAnagrams("curse", words),
    "\ntale", findAnagrams("tale", words),
);