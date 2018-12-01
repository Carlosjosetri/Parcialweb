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

module.exports=control;