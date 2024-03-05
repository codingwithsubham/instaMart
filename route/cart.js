const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/cart');

router.post('/add', auth, async (req, res) => {
  const { product } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart?.products?.push(product?._id);
    }
    await cart.save();
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.post('/remove', auth, async (req, res) => {
  const { product } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      let products = [...cart.products];
      const index = products.findIndex((x) => x._id === product._id);
      products.splice(index, 1);
      cart.products = products;
      await cart.save();
    }
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('products');
    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        products: [],
      });
      await cart.save();
    }
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
