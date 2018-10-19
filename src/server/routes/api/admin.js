const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const passport = require('passport');
import {ADMIN,END_USER} from '../../common/constants';

//Load Model
const User=require('../../model/User')

//Load validations
const validateUserInput = require('../../validation/user');


const errors={type:'Wrong user type!'}

router.use(passport.authenticate('jwt', { session: false }), (req,res,next)=>{
    req.user.type===ADMIN
    ?next()
    :res.status(401).json(errors);
})
router.get('/',(req,res)=>{
    res.status(200).send('admin page')
})

router.get('/users',(req,res)=>{

    User.find({},'name email avatar date isActive type',(err,users)=>{
        res.json(users)
    })
})

router.post('/user',(req,res)=>{
    const { errors, isValid } = validateUserInput(req.body);
    if (!isValid) {
        return res.status(404).json(errors);
    }
    console.log('valiadation ok')
    User.findById(req.body._id).then(user => {
        if (!user) {
            errors.userNotFound = "User not Found";
            return res.status(404).json(errors);
        }
        // ***Only update type and isActive***
        // user.name = req.body.name;
        // user.avatar = req.body.avatar;
        user.isActive = req.body.isActive;
        user.type=req.body.type;

        user.save().then(user => res.json(user));

    }).catch(err => res.status(400).json(err));
})

module.exports = router;