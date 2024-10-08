const mongoose=require('mongoose');

// schema for item collection
const itemSchema=new mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    categoryName:String,
    subcategoryName:String,
    image:String,
    description:{
        type:String,
        required:true
    },
    taxApplicability:{
        type:Boolean,
        default:false
    },
    tax:{
        type:Number,
        default:0
    },
    baseAmount:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    totalAmount:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('Item',itemSchema);
