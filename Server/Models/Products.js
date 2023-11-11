const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    ratings: Number,
    category: String,
    subcategory: String,
    brand: String,
    stock: Number,
    images: [String],
    reviews: [
        {
            user: String,
            comment: String,
            rating: Number
        }
    ],
    shippingDetails: {
        weight: Number,
        dimensions: {
            length: Number,
            width: Number,
            height: Number
        }
    },
    discounts: {
        salePrice: Number,
        startDate: Date,
        endDate: Date
    },
    attributes: [
        {
            name: String,
            value: String
        }
    ],
    variants: [
        {
            type: String,
            options: [String]
        }
    ],
    tags: [String],
    dateAdded: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller' 
    },
});

const Product = mongoose.model('Product', ProductSchema);
