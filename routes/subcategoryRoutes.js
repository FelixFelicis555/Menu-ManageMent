

const express=require("express");
const router = express.Router();
const Subcategory=require("../models/subcategory.js");
const Category=require("../models/category.js");
router.post("/", async (req, res) => {
    try {
        const newsubCategory = new Subcategory(req.body);
        const savesubcategory = await newsubCategory.save();
        const categoryName = req.body.categoryName;
        const category = await Category.findOne({ categoryName: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        category.subCategories.push(savesubcategory); // push subcategory
        await category.save();
        res.status(201).json(savesubcategory);

    } catch (error) {
        res.status(400).json({ error: "Internal Server Error" });
    }
});

//Get request to get all subcategories
router.get("/", async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        if (!subcategories)
            return res.status(404).json({ message: 'no subcategories found' });
        res.status(201).json(subcategories);

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// Get request to get all subcategories under a category
router.get("/:categoryName", async (req, res) => {
    try {
        const categoryName = req.params.categoryName;
        const category = await Category.findOne({ categoryName: categoryName }).populate('subCategories');
        if (!category)
            return res.status(404).json({ message: 'no such category found' });
        const subcategoires = category.subCategories;
        if (!subcategoires)
            return res.status(404).jspon({ message: 'no subcatgories found under the category' });
        res.status(201).json(subcategoires);

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// get request to get a subcategory by its name
router.get("/subcategory/:subcategoryName", async (req, res) => {
    try {
        const subcategoryName = req.params.subcategoryName;
        const subcategory = await Subcategory.findOne({ subcategoryName: subcategoryName });
        if (!subcategory)
            return res.status(404).json({ message: 'no such subcategory found' });
        res.status(201).json(subcategory);

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

});

//patch request to update attributes of subcategory
router.patch("/subcategory/:subcategoryName", async (req, res) => {
    try {
        //console.log(req.body);
        const subcategoryName = req.params.subcategoryName;
        const updates = req.body;
        const updatedsubCategory = await Subcategory.findOneAndUpdate({ subcategoryName }, updates, { new: true });
        if (!updatedsubCategory)
            return res.status(404).json({ message: 'category not found' });
        res.status(201).json(updatedsubCategory);

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//delete request to delete a subcategory
router.delete("subcategory/:subcategoryName",async(req,res)=>{
  try {
    const subcategoryName=req.params.subcategoryName;
    const findsubcategory=await Subcategory.findOne({subcategoryName:subcategoryName});
    if(!findsubcategory)
        return res.status(404).json({message:'sub category not found'})
    await Subcategory.deleteOne({subcategoryName:subcategoryName});
    res.status(201).json({message:'sub category deleted succesfully'});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports=router;