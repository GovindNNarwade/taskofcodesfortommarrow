const service = require("../model/service_model")
exports.CreateserviceDetails = async (req,res)=>{
    try {
        const result = await service.create({
            serviceId: Math.floor((Math.random()*100000)+1),
            serviceName:req.body.serviceName,
            categoryId:req.body.categoryId,
            Type:req.body.Type,
            PriceOptionId:req.body.PriceOptionId,
        })
        res.json({
            succcess:true,
            message:"service craeted successfully",
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
exports.viewserviceDetails = async (req,res)=>{
    try {
        const result = await service.aggregate([
            {
                $lookup:{
                    from:'categories',
                    localField:'categoryId',
                    foreignField:'categoryId',
                    as:"category"
                }
            },
            {
                $lookup:{
                    from:'servicepriceoptions',
                    localField:'serviceId',
                    foreignField:'serviceId',
                    as:"ServicePriceOption"
                }
            },
        ])
        res.json({
            succcess:true,
            message:"get  All service",
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
exports.deleteserviceDetails = async (req,res)=>{
    try {
        const result = await service.findOneAndDelete({serviceId:req.params.serviceId})
        res.json({
            succcess:true,
            message:"delete service Details",
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
exports.updateserviceDetails = async (req,res)=>{
    try {
        const result = await service.findOneAndUpdate({serviceId:req.params.serviceId}, req.body , {
            new: true,
            runValidators: true,})
        res.json({
            succcess:true,
            message:"update   service details",
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
exports.getSingleserviceDetails = async (req,res)=>{
    try {
        const result = await service.findOne({serviceId:req.params.serviceId})
        res.json({
            succcess:true,
            message:"get  All service",
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