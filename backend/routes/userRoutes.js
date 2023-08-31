const express = require('express');
const router = express.router();
const {registerUser} = require('../controllers/userController');

//create a user
router.post('/', registerUser);


module.exports = router;