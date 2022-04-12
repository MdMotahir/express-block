const mongoose = require('mongoose');

const tokenModel = mongoose.Schema({
  title: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  subtitle: {
  	type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Token', tokenModel);