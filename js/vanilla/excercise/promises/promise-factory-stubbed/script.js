'use strict';

const promiseFactory = (name, time, isSuccessful) => {
    return new Promise((resolve, reject) => {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code.
        // In reality, you will probably be using something like XHR or an HTML5 API.
        setTimeout(() => {
            isSuccessful ? 
            resolve(name + " success!")  // Yay! Everything went well!
            :
            reject(name + ' failure!')
        }, time)
    })
}

//const firstPromise = promiseFactory('firstPromise', 5000, true);
//const secondPromise = promiseFactory('secondPromise', 3000, true);
//const thirdPromise = promiseFactory('thirdPromise', 1000, false);

// console.info("firstPromise execution started", firstPromise.then((res) => { console.log(res) }))
// console.info("secondPromise execution started", secondPromise.then((res) => { console.log(res) }))
// console.info("thirdPromise execution started", thirdPromise.then((res) => { console.log(res) }).catch(e => {console.log(e)}))

Promise.all([promiseFactory('firstPromise', 5000, true), promiseFactory('secondPromise', 3000, true)]).then((res) => { console.log(res) }).catch(e => {console.log(e)});

// Promise.all([firstPromise, secondPromise, thirdPromise]).then((res) => { console.log(res) }).catch(e => {console.log(e)});