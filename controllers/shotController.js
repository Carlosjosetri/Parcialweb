const model=require('../models/bebida');
const control={};


control.index= async function (req,res,next) {
    try {
        let bebida=await model.find();
        return res.status(200).json(bebida);
    } catch (error) {
        return res.status(500).json({error:err});
    }
    
}

control.create=async function(req,res,next){
    let be=new model();
      be.marca=req.body.marca;
      be.tipo=req.body.tipo;
      be.anios=req.body.anios;
    try {
      await be.save();
    
      return res.status(200).json({mesaje:"exito"});
  } catch (error) {
    return res.status(500).json({error:err});
  }

}

control.delete=async function(req,res,next){
    let {id}=req.params;
    try {
        await model.remove({id:id});
        return res.status(200).json({mesaje:"eliminado exito"})
    } catch (error) {
        return res.status(500).json({error:err});
    }
}

module.exports=control;