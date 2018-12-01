const mongoose=require('mongoose');
const {Schema}=mongoose;

const bebidaSchema=new Schema({
   marca:String,
   tipo:String,
   anios:String


});
module.exports=mongoose.model('bebidas',bebidaSchema)



