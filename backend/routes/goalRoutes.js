const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController")
const { getGoals, setGoal, updateGoal, deleteGoal } = goalController;
const {protect} = require('../middleware/authMiddleware');

//get request for /api/goals
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);
 

module.exports = router;
