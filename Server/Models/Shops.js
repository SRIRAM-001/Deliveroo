const ShopSchema = new mongoose.Schema({
    name: String,
    location: String,
    address: String,
    contact: {
        phone: String,
        email: String
    },
    description: String,
    categories: [String], 
    openingHours: {
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
        Sunday: String
    },
    images: [String], 
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product' 
        }
    ],
    reviews: [
        {
            user: String,
            comment: String,
            rating: Number
        }
    ],
    dateAdded: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const Shop = mongoose.model('Shop', ShopSchema);
