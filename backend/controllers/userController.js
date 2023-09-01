const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // password hashing
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc Register new user
//@route GET /api/users
//@access Private
const registerUser = asyncHandler(async(req, res) => {
    //send body data
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }

    res.json({message: 'Register User'});
});

//@desc Authenticate a user
//@route GET /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)        
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
    res.json({message: 'Login User'});
});


//@desc Get user data
//@route GET /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {     
    const {_id, name, email} = await User.findById(req.user.id);
    res.status(200).json({
        id: _id,
        name,
        email
    });
});

generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {
   registerUser,
   loginUser,
   getMe
}