const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    require: true,
  },
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'product',
      require: true,
    },
  ],
});

module.exports = Cart = mongoose.model('cart', CartSchema);
