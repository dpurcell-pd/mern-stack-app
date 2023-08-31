const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => { 
    const goals = await Goal.find();
    res.status(200).json(goals);          
});

//@desc Set Goal
//@route PUT /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field.');
    }
    const goal = await Goal.create({
        text: req.body.text
    });
    res.status(200).json(goal);
});

//@desc Update Goal
//@route PUT /api/goals
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findbyId(req.params.id);

    if (!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    //finds the requested goal by Id, and creates it if it doesn't exist
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
});

//@desc Delete Goal
//@route DELTE /api/goals
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    // find the goal by Id
    const goal = await Goal.findByIdAndRemove(req.params.id);

    //check if goal does not exists
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    res.status(200).json({id: req.params.id});
    
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}