const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  prodName: {
    type: String,
    require: true,
  },
  qty: {
    type: String,
    require: true,
  },
  mrp: {
    type: Number,
    require: true,
  },
  sellPrice: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'category',
    require: true,
  },
  subCategory: {
    type: mongoose.Schema.ObjectId,
    ref: 'subcategory',
    require: true,
  },
  images: [],
});

module.exports = Product = mongoose.model('product', ProductSchema);
