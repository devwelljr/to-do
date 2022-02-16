const express = require("express");

const jwtValidation = require("../middlewares/jwtValidation");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

const {
  createValidation,
  updateValidation,
} = require("../middlewares/tasksValidation");

const router = express.Router();

router.post("/", jwtValidation, createValidation, createTask);

router.get("/mytasks", jwtValidation, getTasks);

router.put("/update/:id", jwtValidation, updateValidation, updateTask);

router.delete("/delete/:id", jwtValidation, deleteTask);

module.exports = router;
