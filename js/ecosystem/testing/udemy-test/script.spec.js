const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

it('is a silly test', () => {
    expect('hello').toBe('hello')
    
})

it('is searching google', () => {
    expect(googleSearch('cats', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})