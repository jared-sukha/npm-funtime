//Okay, to anyone/tutor?? who is reading this, to get this chalk-animation module to work I had to configure the package.json file to see the project as ES modules, and apparently the way they import/refer to files (or maybe I should say dependencies instead of files) is as below, it was loads of fun trying to get this to work Lolz(ie took me far too long)

import cowsay from 'cowsay'
import chalkAnimation from 'chalk-animation'
// the 'original' way as below:
// const cowsay = require('cowsay')
// const chalkAnimation = require('chalk-animation')

chalkAnimation.rainbow(
  cowsay.say({
    text: "I'm a slightly fancy dino-module",
    e: 'oO',
    T: 'U ',
    f: 'stegosaurus',
  })
)

// below gets list of cows
// function get_cows(error, cow_names) {
//   if (error) {
//     console.log(error)
//   } else if (cow_names) {
//     console.log(`All of the cows available: ${cow_names}`)
//   }
// }
// cowsay.list(get_cows)
