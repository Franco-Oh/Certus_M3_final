const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {mongoose} = require('./base.js');

const port = 3000;
const app = express();

//ajustes
app.set('port', process.env.PORT || port)
app.use(express.json());

//rutas
app.use('./api', require('./app'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


const Producto = require('./ProductoSchema.js');


app.post('/api/productos', async (req,res)=>{
    const nuevoProducto = new Producto(req.body)
    await nuevoProducto.save().then((result)=>{
        res.status(201).json({ok: true})
    }).catch((err) => console.log(err))
})


app.get('/todos', (req, res) =>{
    Producto.find(function(err, data) {
        if(err){
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/insertar', async (req, res) => {
    var nuevo = new Producto({
                    nombre_producto: "Morty Funko",
                    precio: 50,
                    cantidad: 1
                });
    nuevo.save(function (err, data) {
        if(err){
            console.log(err);
        } else {
            res.send("Datos insertados");
        }
    })
});

app.get('/borrar', (req, res) =>{
    Producto.remove({nombre_producto:"Teddy Rick"},
        function(err, data) {
            if(err){
                console.log(err);
            } else {
                res.send(data);
            }
        });
});




app.listen(port, function(){
    console.log(`Servidor esta escuchando en http://localhost:${port}`);
	console.log("Servidor funcionando...");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());