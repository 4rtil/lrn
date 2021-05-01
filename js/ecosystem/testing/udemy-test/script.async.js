const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    console.log('promise mode');
    return fetch('http://swapi.py4e.com/api/people/')
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        return {
            count: data.count,
            results: data.results
        }
    }).catch(error => {
        console.log(error);
    })
}

const getPeople = async (fetch) => {
    console.log('async/await mode');
    const getRequest = await fetch('http://swapi.py4e.com/api/people/')
    const data = await getRequest.json();
    //console.log(data);
    return {
        count: data.count,
        results: data.results
    }
}

if (process.argv[2] === '-t') {
    if (process.argv[3]) {
        switch (process.argv[3]) {
            case 'promise':
                getPeoplePromise(fetch);
            case 'async/await':
                getPeople(fetch);
            default:
                console.log('incorrect type flag parameter');
        }

    } else {
        console.log('you have to select a type of fetch: promise or async/await');
    }
} else {
    console.log('missing required \'-t\' flag');
}

module.exports = {
    getPeople,
    getPeoplePromise
}