const category = require("../model/category_model")
exports.CreatecategoryDetails = async (req,res)=>{
    try {
        const result = await category.create({
            categoryId: Math.floor((Math.random()*100000)+1),
            categoryName:req.body.categoryName
        })
        res.json({
            succcess:true,
            message:"category craeted successfully",
            data:result
        })
    } catch (error) {
        res.json({
            succcess:false,
            message:"Something went worng"+error.message,
            data:null
        })
    }
}
exports.viewcategoryDetails = async (req,res)=>{
    try {
        const result = await category.find()
        res.json({
            succcess:true,
            message:"get  All Category",
            data:result
        })
    } catch (error) {
        res.json({
            succcess:false,
            message:"Something went worng"+error.message,
            data:null
        })
    }
}
exports.deletecategoryDetails = async (req,res)=>{
    try {
        const result = await category.findOneAndDelete({categoryId:req.params.categoryId})
        res.json({
            succcess:true,
            message:"delete Category Details",
            data:result
        })
    } catch (error) {
        res.json({
            succcess:false,
            message:"Something went worng"+error.message,
            data:null
        })
    }
}
exports.updatecategoryDetails = async (req,res)=>{
    try {
        const result = await category.findOneAndUpdate({categoryId:req.params.categoryId}, req.body , {
            new: true,
            runValidators: true,})
        res.json({
            succcess:true,
            message:"update   Category details",
            data:result
        })
    } catch (error) {
        res.json({
            succcess:false,
            message:"Something went worng"+error.message,
            data:null
        })
    }
}
exports.getSinglecategoryDetails = async (req,res)=>{
    try {
        const result = await category.findOne({categoryId:req.params.categoryId})
        res.json({
            succcess:true,
            message:"get  All Category",
            data:result
        })
    } catch (error) {
        res.json({
            succcess:false,
            message:"Something went worng"+error.message,
            data:null
        })
    }
}