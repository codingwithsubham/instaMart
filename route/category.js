const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');

router.post('/add', auth, async (req, res) => {
  const {
    formData: { catName, catDesc },
    images,
  } = req.body;
  try {
    const cat = new Category({
      catName,
      catDesc,
      images,
    });
    await cat.save();
    return res.json(cat);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const cats = await Category.find({});
    return res.json(cats);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.post('/sub-category/add', auth, async (req, res) => {
  const {
    formData: { subCatName, subCatDesc },
    images,
    category
  } = req.body;
  try {
    const subCat = new SubCategory({
      subCatName,
      subCatDesc,
      category,
      images,
    });
    await subCat.save();
    await Category.findOneAndUpdate(
      { _id: category },
      {
        $push: {
          subcategories: subCat._id,
        },
      }
    );
    return res.json(subCat);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/sub-category/:id', auth, async (req, res) => {
  try {
    const cats = await SubCategory.find({ category: req.params.id });
    return res.json(cats);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
