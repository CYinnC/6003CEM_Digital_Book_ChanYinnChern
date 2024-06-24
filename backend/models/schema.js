
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },

});

module.exports = mongoose.model('Saved', favoriteSchema);
