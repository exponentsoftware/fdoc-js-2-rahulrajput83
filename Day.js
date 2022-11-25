/* 1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name. */

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

const countryOfCountry = countries => {
    let arr = [];
    for(let i = 0; i < countries.length; i++) {
        let three = countries[i].charAt(0) + countries[i].charAt(1) + countries[i].charAt(2)
        let newArr = [countries[i], three, countries[i].length];
        arr.push(newArr)
    }
    return arr
}

console.log(countryOfCountry(countries));