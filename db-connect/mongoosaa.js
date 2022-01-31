const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/ecomm');
    const productSchema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        category: String
    });
    const ProductsModal = mongoose.model('products', productSchema);
    const data = new ProductsModal({
        name: "note 10",
        brand: "MI",
        price: 2500,
        category: "mobile"
    });
    const result = await data.save();
    console.log(result)
}
main();