const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  catName: {
    type: String,
    require: true,
  },
  catDesc: {
    type: String,
    require: true,
  },
  subcategories: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'subcategory'
    }
  ],
  images: []
});

module.exports = Category = mongoose.model('category', CategorySchema);
