

const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const url=process.env.url;

async function connectToDB(){
    try{
        await mongoose.connect(url);
        console.log("connected");
        console.log("Hi");
    } catch(error){
        console.log('Error connecting to Database',error);
    }

};

module.exports=connectToDB;