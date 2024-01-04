const bcrypt = require("bcryptjs")
const admin =[
    {
        Email:"admin@codesfortomorrow.com",
        Password:bcrypt.hashSync("Admin123!@#",10),
    }
  
]

module.exports =admin