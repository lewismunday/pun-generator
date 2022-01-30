
//Sets variables for called upon intiators
const punTypes = ['Bad Puns', 'Music Puns', 'Food Puns'];
randomSelection = Math.floor(Math.random() * punTypes.length);

//Creating object for puns

const puns = {
    'Bad Puns': ['I asked my French friend if she likes to play video games. She said, "Wii."', 'Yesterday, a clown held the door open for me. It was such a nice jester!', 'I was going to make myself a belt made out of watches, but then I realized it would be a waist of time.', 'What\'s the difference between a hippo and a Zippo? A. A hippo is really heavy, and a Zippo is a little lighter.', 'All these sea monster jokes are just Kraken me up.', 'Shout out to the people who ask what the opposite of "in" is.', 'A man sued an airline company after it lost his luggage. Sadly, he lost his case.', 'The past, the present, and the future walk into a bar… It was tense.', '6:30 is the best time on a clock… hands down.', 'What\'s the difference between a poorly dressed man on a bicycle and a nicely dressed man on a tricycle? A tire.'],
    'Music Puns': ['What kind of music are balloons afraid of? Pop Music', 'Where did the music teacher leave her keys? In the piano.', 'Me and my friends are in a band called “Duvet”. We’re a cover band.', 'C, E-flat, and G walk into a bar. The bartender shows them the door and says, “Sorry, we don’t serve minors.”', 'What’s an avocado’s favourite music? Guac ‘n’ roll.', 'What do you get when you drop a piano down a mineshaft? A-flat minor.', 'What do you call a musician with problems? A trebled man.', 'What’s a golf clubs favourite type of music? Swing.', 'A musician told me he was going to hit me with the neck of his guitar. I replied, "Is that a fret?"', 'How did the turkey win the talent show? With his drum-sticks.'],
    'Food Puns': ['Did you hear how they caught the great produce bandit? He stopped to take a leek.', 'I can\'t stand potato puns. I think they\'re pomme de terrible.', 'What does a grape say when it gets stepped on? Nothing, it just lets out a little wine.', 'Boy, I just got hit in the head with a can of soda. I was lucky it was a soft drink.', 'Did you hear about the Italian chef with a terminal illness? He pastaway.', 'I went to a seafood restaurant and slipped. I pulled a mussel.', 'It was an emotional wedding. Even the cake was in tiers.', 'You know what’s hard to beat for breakfast? A boiled egg.', 'A guy just threw a glass of milk at me. How dairy!', 'I was going to grow an herb garden, but I couldn’t find the thyme.']
}


//Generator for puns based on input

const generator = input => {
    const findIndex = punTypes.indexOf(input)
    if (input == punTypes[findIndex]){
        console.log(`Your pun type is: ${input}.`)
        console.log(puns[input][Math.floor(Math.random() * puns[input].length)])
    } else {
        console.log('Please enter correct pun type')
    }
}

generator(punTypes[randomSelection])
