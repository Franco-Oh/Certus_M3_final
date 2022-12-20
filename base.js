const mongoose = require('mongoose')
const DB_URI = `mongodb://localhost:27017/funkosCart`

mongoose.set('strictQuery', false);
mongoose.connect(
    DB_URI,
    {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
    (err) =>{
        if(err){
            console.log('Error:'+err);
        }else{
            console.log('Conexion correcta!!');
        }
    }
)

module.exports = mongoose;