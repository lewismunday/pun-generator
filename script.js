
//Sets variables for called upon intiators

const punTypes = ['Bad Puns', 'Dog Puns', 'Food Puns']

//Creating object for puns

const puns = {
    'Bad Puns': ['I asked my French friend if she likes to play video games. She said, "Wii."'],
    'Dog Puns': [],
    'Food Puns': []
}


//Generator for puns based on input

const generator = input => {
    const findIndex = punTypes.indexOf(input)
    if (input == punTypes[findIndex]){
        console.log(puns[input][Math.floor(Math.random() * puns[input].length)])
    } else {
        console.log('Please enter correct pun type')
    }
}

generator('Bad Puns')
