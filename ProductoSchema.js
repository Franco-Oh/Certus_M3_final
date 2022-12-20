const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
	nombre_producto: String,
	detalle: String,
	precio: Number,
	stock: Number,
	cantidad: Number,
});

module.exports = mongoose.model('Producto',ProductoSchema);