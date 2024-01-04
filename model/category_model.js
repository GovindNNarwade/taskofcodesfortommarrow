
const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
  
    categoryId:{
        type:String,  
    },
    categoryName:{
        type:String
    }, 
}
,{
timestamps:true
})
module.exports = mongoose.model("category",categorySchema)