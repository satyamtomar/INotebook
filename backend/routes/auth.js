const express=require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Creating a user using: POST "/api/auth/".Doesn't require auth
router.post('/',[body('email','Enter a valid mail').isEmail(),body('name','Enter a valid name').isLength({min:2}),body('password','Password must contain atleast 5 characters').isLength({min:5})],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
    res.json({error:'Please enter a unique value for email'})
     });
    
})



module.exports=router;