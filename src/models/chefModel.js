const mongoose = require('mongoose');
const chefSchema = new mongoose.Schema({
    name: String,
    Specialty : String
});
module.exports = mongoose.model('Chef', chefSchema);