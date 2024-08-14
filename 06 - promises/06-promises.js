const {httpClientePlugin} = require ('../plugins/http-client.plugin')

const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`


    const pokemon = await httpClientePlugin.get(url)

       

    return pokemon.name

    // fetch (url).then (resp => resp.json()})
    // .then (data => {console.log(data)})
    // );
    
    // Devuelve la promesa
    // return fetch (url).then(resp => resp.json())
    // .then(pokemon => console.log(pokemon.name)
    // .catch((error) => {
    //     throw new Error ('No se ha encontrado el Pokemon')
    // })
    // )


    
    
    
    
    

}

module.exports = {getPokemonById}