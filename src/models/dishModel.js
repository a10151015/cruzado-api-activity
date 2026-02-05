const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
    },
    price:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: { 
        type: String,
        enum: ['Starter', 'main', 'Dessert', 'Drinks'],
        required: true,
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },

});

module.exports = mongoose.model('Dish', dishSchema);