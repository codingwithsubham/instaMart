const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'category',
  },
  subCatName: {
    type: String,
    require: true,
  },
  subCatDesc: {
    type: String,
    require: true,
  },
  images: [],
});

module.exports = SubCategory = mongoose.model('subcategory', SubCategorySchema);
