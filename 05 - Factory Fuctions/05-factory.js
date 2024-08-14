
const {getAge, getID} = require('../plugins')

const obj = {
    name: 'Jhon',
    birthdate: '1981-02-15'
}

const buildPerson = ({name, birthdate}) => {
    return {
        id: getID(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate)

    }
}

const jhon = buildPerson(obj)

console.log(jhon);
