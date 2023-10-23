// Modelo para el almacen
const { Schema, model } = require('mongoose');

const WarehouseSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
    },

});

WarehouseSchema.methods.toJSON = function () {
    const { __v, ...ware } = this.toObject();
    return ware;
}

module.exports = model('Warehouse', WarehouseSchema);