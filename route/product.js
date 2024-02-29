const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/product');

router.post('/add', auth, async (req, res) => {
  const {
    formData: { prodName, qty , mrp, sellPrice },
    images,
    category,
    subCategory,
  } = req.body;
  try {
    const prod = new Product({
      prodName,
      qty,
      mrp,
      sellPrice,
      category,
      subCategory,
      images,
    });
    await prod.save();
    return res.json(prod);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/', auth, async (_, res) => {
  try {
    const prods = await Product.find({})
      .populate('category')
      .populate('subCategory');
    return res.json(prods);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/category/:id', auth, async (req, res) => {
  try {
    const prods = await Product.find({ category: req.params.id })
      .populate('category')
      .populate('subCategory');
    return res.json(prods);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/sub-category/:id', auth, async (req, res) => {
  try {
    const prods = await Product.find({ category: req.params.id })
      .populate('category')
      .populate('subCategory');
    return res.json(prods);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
