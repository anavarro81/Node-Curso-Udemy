const  {getUser} = require('./03 - CallBack/getUser')


getUser(3, function(error, user ) {

    if (error) {
       throw new Error(error)
    }

    console.log(user);
    
    

    
    

})


// console.log(emailTemplate);
