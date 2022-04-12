const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  bio: {
  	type: String
  },
  website: {
  	type: String
  },
  tokens: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Token' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userModel);