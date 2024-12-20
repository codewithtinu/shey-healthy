const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const middleWare = require('../middlewares/authMiddleware')

router.post('/register', async(req, res) => {
    try {
        const userExists = await User.findOne({email: req.body.email});
        if (userExists) {
            return res.status(200).send({message: 'Email already exists', success: false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        req.body.password = hashPassword;
        const newUser = new User(req.body);
        await newUser.save();
        req.status(200).send({message: "User created successfully", success: true})
        
    } catch (error) {
        req.status(500).send({message: "Error creating user", success: false, error})
    }
})
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({email : req.body.email});

        if(!user){
            return res.status(200).send({message: "User does not exist", success:false})
        }
        // compaire the db password with user password
        const isMatched = await bcrypt.compare(req.body.password, user.password);
        if(!isMatched){
            return res.status(200).send({message: "Password is not matched", success:false})
        }else {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
                expiresIn : '1d'
            })
            res.status(200).send({message: "Login Successfull", success: true, data: token})
        }
    } catch (error) {
        req.status(500).send({message: "Error in login", success: false, error})
    }
});
router.post('/get-info-by-id', middleWare, async(req,res) => {
    try {
        const user = await User.findOne({_id: req.body.userId});
        if(!user){
            return res.status(200).send({message:'User does not exists', success:false})
        }else {
            res.status(200).send({success: true, data:{
                name: user.name,
                email:user.email
            }})
        }
        
    } catch (error) {
        res.status(200).send({message: 'User does not exists', success:false})
    }
})


module.exports = router;