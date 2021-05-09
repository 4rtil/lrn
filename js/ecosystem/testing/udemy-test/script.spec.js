const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('is a silly test', () => {
        expect('hello').toBe('hello')
    })
    
    it('is searching google', () => {
        expect(googleSearch('cats', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })
    
    it('is handling undefined and null well', () => {
        expect(googleSearch(null, dbMock)).toEqual([])
        expect(googleSearch(undefined, dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})