const axios = require('axios');

const httpClientePlugin = {  
    

    get: async (url) => {

        try {
            const resp = await axios.get(url)
            return resp.data
        } catch (error) {
            console.log('Se ha producido un error en el get ', error);
        }


    },

    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async(url) => {}

}

module.exports = {
    httpClientePlugin,
}