
const {getPokemonById} = require ('./06 - promises/06-promises')


getPokemonById(1)
.then(pokemon => console.log(pokemon))
.catch(errorrr => console.log({errorrr}))




