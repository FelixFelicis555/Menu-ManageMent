const mongoose=require('mongoose');

// schema for subcategory collection

const subcategorySchema=new mongoose.Schema({
    subcategoryName:{
        type:String,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    },
    image:String,
    description:{
        type:String,
        required:true
    },
    taxApplicability:{
        type:Boolean,
        default:false
    },
    taxType:String,
    tax:{
        type:Number,
        default:0
    },
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
    }]
});

module.exports=mongoose.model('Subcategory',subcategorySchema);