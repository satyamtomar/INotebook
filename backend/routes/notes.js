const express=require('express');
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note=require('../models/notes');
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes',fetchuser,[body('title','Enter a valid title').isLength({min:3}),body('description','Enter a valid description').isLength({min:2})],async (req,res)=>{

    const notes=await Note.find({user:req.user.id});
    res.json(notes);
})

router.get('/addnotes',fetchuser,[body('title','Enter a valid title').isLength({min:3}),body('description','Enter a valid description').isLength({min:2})],async (req,res)=>{
  try{
    const {title,description,tag}=req.body;
    //if there are errors, returns bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) 
   {
     return res.status(400).json({ errors: errors.array() });
   }
  
    const note=new Note({
  title,description,tag,user:req.user.id
    });
    const savednote=await note.save();
    res.json(savednote);
 }
  catch(error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  
  }
})


module.exports=router;

