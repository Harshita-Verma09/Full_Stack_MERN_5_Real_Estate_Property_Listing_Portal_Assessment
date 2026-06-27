const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
    },
    
    propertyType: {
        type: String,
        required: [true, "Please add a property type"],
        enum: ["Apartment", "House", "Condo", "Townhouse", "Villa", "Commercial"],
    },
    location: {
        type: String,
        required: [true, "Please add a location"],
        trim: true,
    },
    area: {
        type: Number,
        required: [true, "Please add an area"],
    },
    bedrooms: {
        type: Number,
        required: [true, "Bedrooms are required"],
    },
    bathrooms: {
        type: Number,
        required: [true, "Please add number of bathrooms"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
    },
    imageUrl: {
        type: String,
        required: [true, "Please add an image"],
    },
},
    {
        timestamps: true,
    }
);

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;       