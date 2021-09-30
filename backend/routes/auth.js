const express=require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const jwtsecret="satyamtomar";

//Creating a user using: POST "/api/auth/createuser".Doesn't require Login
router.post('/createuser',[body('email','Enter a valid mail').isEmail(),body('name','Enter a valid name').isLength({min:2}),body('password','Password must contain atleast 5 characters').isLength({min:5})],async (req,res)=>{
    const errors = validationResult(req);
    //if there are errors, returns bad request
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({ errors: errors.array() });
    }
    //checks whether the email has already been created
   try{
    let user=await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error:"Sorry a user with this email already exists"});
    }
    const salt=await bcrypt.genSalt(10);

    const secpass=await bcrypt.hash(req.body.password,salt);
     user=await User.create({
        name: req.body.name,
        password: secpass,
        email:req.body.email
      })
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:'Please enter a unique value for email'})
      const data={
        user:{
          id:user.id
        }
      }
    const authtoken=jwt.sign(data,jwtsecret);
    res.json({authtoken});
    }
    catch(error)
    {
      console.error(error.message);
      res.status(500).send("An Error occured");
    }
     });
    



module.exports=router;