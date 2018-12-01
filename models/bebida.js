const mongoose=require('mongoose');
const {Schema}=mongoose;

const bebidaSchema=new Schema({
   marca:String,
   tipo:String,
   años:String


});
module.exports=mongoose.model('bebidas',bebidaSchema)



