
const express=require("express");
const router=express.Router();
const Category=require("../models/category.js");

router.post("/",async (req,res)=>{
    try{
        const newCategory=new Category(req.body);
        const saveCategory=await newCategory.save();
        if(!saveCategory)
            res.status(404).json({message:'Error creating category'});
res.status(201).json(saveCategory);  
    } catch (error){
        res.status(400).json({error:"Internal Server Error"});
    }

});

// API to get all categories
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories)
            return res.status(404).json({ message: 'No categories found' });
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

});

// API request to get a category by its name
router.get("/:categoryName", async (req, res) => {
    try {
        const categoryName = req.params.categoryName;
        const category = await Category.findOne({ categoryName: categoryName });
        if (!category)
            return res.status(404).json({ message: 'no such category found' });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// patch request to update attributes of a category
router.patch("/:categoryName", async (req, res) => {
    try {
        //console.log(req.body);
        const categoryName = req.params.categoryName;
        const updates = req.body;
        const updatedCategory = await Category.findOneAndUpdate({ categoryName }, updates, { new: true });
        if (!updatedCategory)
            return res.status(404).json({ message: 'category not found' });
        res.status(201).json(updatedCategory);
    } catch (error) {
        console.error('Error updating items:', error);
        res.status(500).json({ message: 'Internal Server Error' });

    }
});
router.delete("/:categoryName",async(req,res)=>{

    try {
      const categoryName=req.params.categoryName;
      const findcategory=await Category.findOne({categoryName:categoryName});
       if(!findcategory)
        return res.status(404).json({message:'category not found'})
      await Category.deleteOne({categoryName:categoryName});
      res.status(201).json({ message: 'category deleted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  module.exports=router;