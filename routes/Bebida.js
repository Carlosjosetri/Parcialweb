const express=require('express');
const router=express.Router();
const bebidaControl=require('../controllers/shotController');

router.get('/',bebidaControl.index);
router.post('/',bebidaControl.create);
router.delete('/id:',bebidaControl.delete)
module.exports=router;