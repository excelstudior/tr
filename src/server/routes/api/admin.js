const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const passport = require('passport');
import {ADMIN,END_USER} from '../../common/constants';

const User=require('../../model/User')

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

module.exports = router;