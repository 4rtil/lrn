const fetch = require('node-fetch');
const swapi = require('./script.async');

it('calls SWAPI to fetch people', () => {
    expect.assertions(1);
    return swapi.getPeoplePromise(fetch)
    .then(data => {
       expect(data.count).toEqual(87);
    })
})