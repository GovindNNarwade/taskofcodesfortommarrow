const ServicePriceOptions = require("../model/ServicePriceOptions_model")
exports.CreateServicePriceOptionsDetails = async (req,res)=>{
    try {
        const result = await ServicePriceOptions.create({
            ServicePriceOptionsId: Math.floor((Math.random()*100000)+1),
            serviceId:req.body.serviceId,
            Price:req.body.Price,
            Duration:req.body.Duration,
            Type:req.body.Type,
        })
        res.json({
            succcess:true,
            message:"ServicePriceOptions craeted successfully",
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
exports.viewServicePriceOptionsDetails = async (req,res)=>{
    try {
        const result = await ServicePriceOptions.aggregate([
            {
                $lookup:{
                    from:'services',
                    localField:'serviceId',
                    foreignField:'serviceId',
                    as:"service"
                }
            },
        ])
        res.json({
            succcess:true,
            message:"get  All ServicePriceOptions",
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
exports.deleteServicePriceOptionsDetails = async (req,res)=>{
    try {
        const result = await ServicePriceOptions.findOneAndDelete({ServicePriceOptionsId:req.params.ServicePriceOptionsId})
        res.json({
            succcess:true,
            message:"delete ServicePriceOptions Details",
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
exports.updateServicePriceOptionsDetails = async (req,res)=>{
    try {
        const result = await ServicePriceOptions.findOneAndUpdate({ServicePriceOptionsId:req.params.ServicePriceOptionsId}, req.body , {
            new: true,
            runValidators: true,})
        res.json({
            succcess:true,
            message:"update   ServicePriceOptions details",
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
exports.getSingleServicePriceOptionsDetails = async (req,res)=>{
    try {
        const result = await ServicePriceOptions.findOne({ServicePriceOptionsId:req.params.ServicePriceOptionsId})
        res.json({
            succcess:true,
            message:"get  single ServicePriceOptions",
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