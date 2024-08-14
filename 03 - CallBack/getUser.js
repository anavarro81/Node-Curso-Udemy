const Users = [

    {
        id: 1,
        name: 'Jhon Doe'
    },

    {
        id: 2,
        name: 'Jane Doe'
    }
    
]


const getUser = (id, callback) => {
    
    const user = Users.find( user => user.id === id)

    if (!user) {
        return callback (`User not found with id ${id}`)
    }
    
    return callback(null, user)
    
}




module.exports = {getUser}
