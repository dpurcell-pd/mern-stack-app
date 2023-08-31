//@desc Register new user
//@route GET /api/users
//@access Private
const registerUser = (req, res) => {
    res.json({message: 'Register User'});
}

//@desc Authenticate a user
//@route GET /api/users/login
//@access Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'});
}


//@desc Get user data
//@route GET /api/users/me
//@access Public
const getMe = (req, res) => {
    res.json({message: 'User data display'});
}

module.exports = {
   registerUser,
   loginUser,
   getMe
}