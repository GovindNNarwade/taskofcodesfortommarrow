
const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
  
    adminId:{
        type:String,  
    },
    name:{
        type:String
    },
    EmailId:{
        type:String
    },
    Password:{
        type:String
    },  
}
,{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)