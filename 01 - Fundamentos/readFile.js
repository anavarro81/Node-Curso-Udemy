const fs = require ('fs');

const data = fs.readFileSync('README.md', 'utf-8')

const newData = fs.replace(/React/ig, 'Angular')

fs.writeFileSync('README-Angular.md', newData)

console.log(data);
