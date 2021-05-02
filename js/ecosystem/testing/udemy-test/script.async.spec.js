const fetch = require('node-fetch');
const swapi = require('./script.async');

it('getPeoplePromise calls SWAPI to fetch people', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch)
    .then(data => {
       expect(data.count).toEqual(87);
       expect(data.results.length).toBeGreaterThan(5);
    })
})

it('getPeople calls SWAPI to fetch people', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch)
    .then(data => {
       expect(data.count).toEqual(87);
       expect(data.results.length).toBeGreaterThan(5);
    })
})

it('getPeoplePromise returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5, 6]
        })
    }))
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch)
    .then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people/');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it('logs an error in case of failure', () => {
    const mockFetchFailure = jest.fn().mockRejectedValue(Promise.reject(new Error('some error')));
    expect.assertions(1);
    return expect(swapi.getPeoplePromise(mockFetchFailure)).rejects.toEqual(new Error('some error'))
})