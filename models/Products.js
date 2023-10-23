const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    warehouse: {
        type: Schema.Types.ObjectId,
        ref: 'Warehouse',
    }
});

ProductSchema.methods.toJSON = function () {
    const { __v, ...product } = this.toObject();
    return product;
}

module.exports = model('Product', ProductSchema);