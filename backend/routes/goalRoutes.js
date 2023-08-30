const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController")
const { getGoals, setGoal, updateGoal, deleteGoal } = goalController;

//get request for /api/goals
router.route("/").get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);
 

module.exports = router;
