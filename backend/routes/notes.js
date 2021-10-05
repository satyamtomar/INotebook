const express=require('express');
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note=require('../models/notes');
const { body, validationResult } = require('express-validator');


//route1   localhost:5000/api/notes/fetchallnotes
router.get('/fetchallnotes',fetchuser,[body('title','Enter a valid title').isLength({min:3}),body('description','Enter a valid description').isLength({min:2})],async (req,res)=>{

    const notes=await Note.find({user:req.user.id});
    res.json(notes);
})


//route2 localhost:5000/api/notes/addnotes
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

//route3  localhost:5000/api/notes/updatenote:id
router.put('/updatenote/:id',fetchuser,async (req,res)=>{

const {title,description,tag}=req.body;

//Create a newNote object 
const newNote ={};

if(title){newNote.title=title};
if(description){newNote.description=description};
if(tag){newNote.tag=tag};

//Find the note to be updated and update it
let note=await Note.findById(req.params.id);
if(!note){res.status(404).send("Not Found")}

if(note.user.toString() !== req.user.id){
  return res.status(401).send("Not Allowed");
}

note=await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
res.json({note})


})


module.exports=router;

