const asyncHandler = require('express-async-handler');

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'});
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field.');
    }
});

//@desc Set Goal
//@route PUT /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Set goal'});
});

//@desc Update Goal
//@route PUT /api/goals
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
});

//@desc Delete Goal
//@route DELTE /api/goals
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}