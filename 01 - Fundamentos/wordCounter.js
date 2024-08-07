const fs = require ('fs');

const data = fs.readFileSync('README.md', 'utf-8')

const searchedWord = "react"

const regex = new RegExp(`\\b${searchedWord}\\b`, 'gi');

const wordCounter = data.match(regex)
 

console.log('wordCounter: ', wordCounter.length); 


