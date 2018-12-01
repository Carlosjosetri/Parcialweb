const mongoose=require('mongoose');
const {mongodb}=require('./keys');
mongoose.connect(mongodb.uri,{
    userNewParser:true,
    useCreateIndex:true
}).then(db=>console.log('Conexion exitosa'))