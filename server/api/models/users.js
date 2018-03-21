const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  
});

let userModel = mongoose.model('User', userSchema);

module.exports = userModel;