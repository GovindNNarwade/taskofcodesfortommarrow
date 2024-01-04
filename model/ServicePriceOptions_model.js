

const mongoose = require("mongoose")

const ServicePriceOptionsSchema = mongoose.Schema({
  
    ServicePriceOptionsId:{
        type:String,  
    },
    serviceId:{
        type:String,  
    },
    Price:{
        type:String,
    },
    Duration:{
        type:String
    },
    Type:{
        type:String,
    } 
}
,{
timestamps:true
})
module.exports = mongoose.model("ServicePriceOptions",ServicePriceOptionsSchema)