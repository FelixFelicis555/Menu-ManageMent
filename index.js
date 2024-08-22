

const express=require("express");
const bodyParser=require('body-parser');
const cors=require("cors");
const dotenv=require("dotenv");
const connectToDB=require("./db.js");
const app=express();
dotenv.config();

/*
app.use(bodyParser.json());
app.use(cors);
*/
const port=process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

/*
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
*/



const categoryRoutes=require("./routes/categoryRoutes.js");
const itemRoutes=require("./routes/itemRoutes.js");
const subcategoryRoutes=require("./routes/subcategoryRoutes.js");


// Routes to Category,subcategory,item.

app.use("/category",categoryRoutes);
app.use("/subcategories",subcategoryRoutes);
app.use("/items",itemRoutes);

/*
app.use(categoryRoutes);
app.use(subcategoryRoutes);
app.use(itemRoutes);

*/

app.get('/',(req,res)=>{
    res.send('Minnie ');
    
})


connectToDB().then(()=>console.log("Connected to MongoDB"))
. catch((error)=>console.log("Error Connecting to MongoDB: ",error));

module.exports=app;
