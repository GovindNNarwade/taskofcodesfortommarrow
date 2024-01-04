
const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema({
  
    serviceId:{
        type:String,  
    },
    categoryId:{
        type:String,  
    },
    serviceName:{
        type:String
    }, 
    Type:{
        type:String 
    },
    PriceOptionId:{
        type:String   
    }
}
,{
timestamps:true
})
module.exports = mongoose.model("service",serviceSchema)