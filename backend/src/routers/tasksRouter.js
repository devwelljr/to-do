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

router.get("/", jwtValidation, getTasks);

router.put("/:id", jwtValidation, updateValidation, updateTask);

router.delete("/:id", jwtValidation, deleteTask);

module.exports = router;
