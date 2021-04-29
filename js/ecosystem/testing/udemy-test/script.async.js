const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    fetch('http://swapi.py4e.com/api/people/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return {
            count: data.count,
            results: data.results
        }
    })
}

getPeoplePromise(fetch);