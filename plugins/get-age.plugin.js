const getAgePlugin = require('get-age')

const getAge = (birthdate) => {

    if (!birthdate) {
        throw new Error("Debe informar una fecha de nacimiento");               
    }

    return getAgePlugin(birthdate)

}

module.exports = {
    getAge
}