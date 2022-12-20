var mongoose = require('mongoose');
const express = require('express');
// const base = require('./base')
const router = express.Router();
const Producto = require('./ProductoSchema.js');


router.get('/todos', async (req,res)=>{
	const productos = await Producto.find(function(err, data) {
		if(err){
		    console.log(err);
		} else {
		    res.send(data);
		}
	});
	res.json({
		productos: productos
	});
});

router.post('/', async (req,res)=>{
	const {nombre_producto, detalle, precio, stock, cantidad} = req.body;
	const producto = new Producto({
		nombre_producto: nombre_producto,
		detalle: detalle,
		precio: precio,
		stock: stock,
		cantidad: cantidad
	});
	await producto.save();
	res.json({
		status: 'producto guardado'
	});
});




	// router.get('/insertar', async (req, res) => {
	// 	var nuevo = new Producto({
	// 					nombre_producto: "Morty Funko",
	// 					detalle: "String",
	// 					precio: 50,
	// 					stock: 10,
	// 					cantidad: 1
	// 				});
	// 	nuevo.save(function (err, data) {
	// 		if(err){
	// 			console.log(err);
	// 		} else {
	// 			res.send("Datos insertados");
	// 		}
	// 	})
	// });




// app.get('/actualizar', (req, res) =>{
//     ProductosClient.findByIdAndUpdate("639c776dd097911ebbd83772",{detalle: "String"},
//         function(err, data) {
//             if(err){
//                 console.log(err);
//             } else {
//                 res.send(data);
//             }
//         });
// });


// app.get('/', (req, res) =>{
//     res.send({
//         data:'Probando CRUD en MongoDB'
//     })
// });





// router.get('/save', function(req,res) {
//     var newProducto = new ProductoModel({Nombre:"Morty Funko", Descripcion:"Sam", precio:50, stock:1, cantidad:1});
//     newProducto.save(function (err, data) {
//         if (err) {
//             console.log(err + "error en /save");
//         } else {
//             res.send("Data insertada");
//         }
//     });
// });


mongoose.Promise = global.Promise;

module.exports = router;