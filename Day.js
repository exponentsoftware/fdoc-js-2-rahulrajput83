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


/*  2.	Write a function which filter users who has scoresGreaterThan85,  
	Write a function which addUser  to the user array only if the user does not exist.   
	Write a function which addUserSkill which can add skill to a user only if the user exist.   
	Write a function which editUser if the user exist in the users array.   */
    
    const users = [
        {
            name:'Brook', 
            scores:75,
            skills:['HTM', 'CSS', 'JS'],
            age:16
        },
        {
            name:'Alex', 
            scores:80,
            skills:['HTM', 'CSS', 'JS'],
            age:18
        }, 
        {
            name:'David', 
            scores:75,
            skills:['HTM', 'CSS'],
            age:22
        }, 
        {
            name:'John', 
            scores:85,
            skills:['HTM'],
            age:25
        },
        {
            name:'Sara',
            scores:95,
            skills:['HTM', 'CSS', 'JS'],
            age: 26
        },
        {
            name:'Martha', 
            scores:80,
            skills:['HTM', 'CSS', 'JS'],
            age:18
        },
        {
            name:'Thomas',
            scores:90,
            skills:['HTM', 'CSS', 'JS'],
            age:20
        }
        ];    

const filter = users => {
    let arr = [];
    for(let i = 0; i < users.length; i++) {
        if(users[i].scores >= 85) {
            arr.push(users[i])
        }
    }
    return arr
}

console.log(filter(users));

const checkUser = (users, name) => {
    for(let i = 0; i < users.length; i++) {
        if(users[i].name === name) {
            return 'User exits'
        }
    }
    return 'User not exits'
}

console.log(checkUser(users, 'Rahul Rajput'))