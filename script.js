
//Sets variables for called upon intiators

const randomNumber = Math.floor(Math.random() * 2)
const punTypes = ['Bad Puns', 'Dog Puns', 'Food Puns']

//Creating object for puns

const badPuns = {
    0: ['Question?', 'Response'],
    1: ['Question2?', 'Response2']
}

const dogPuns = {
    0: ['Question?', 'Response'],
    1: ['Question2?', 'Response2']
}

const foodPuns = {
    0: ['Question?', 'Response'],
    1: ['Question2?', 'Response2']
}

//console.log(randomNumber)

const generator = input => {
    const findIndex = punTypes.indexOf(input)
    if (input == punTypes[findIndex]){
        console.log(badPuns[randomNumber])
    } else {
        console.log('WRONG')
    }
}

generator('Bad Puns')
