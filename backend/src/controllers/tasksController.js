require("dotenv").config();

const jwt = require("jsonwebtoken");
const taskModels = require("../models/tasksModel");

const createTask = async (req, res) => {
  const { description } = req.body;
  const token = req.headers.authorization;

  const { email } = jwt.verify(token, process.env.SECRET);

  const create = await taskModels.createTask(description, email);

  if (create.err) {
    return res
      .status(422)
      .json({ err: { code: create.err.code, message: create.err.message } });
  }

  return res.status(201).json(create);
};

const getTasks = async (req, res) => {
  const token = req.headers.authorization;

  const { email } = jwt.verify(token, process.env.SECRET);

  const allProducts = await taskModels.getTasks(email);

  return res.status(200).json({ tasks: allProducts });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { newDescription } = req.body;

  const updated = await taskModels.updateTask(id, newDescription);

  return res.status(200).json(updated);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const deleted = await taskModels.deleteTask(id);

  if (deleted.err) {
    return res
      .status(422)
      .json({ err: { code: deleted.err.code, message: deleted.err.message } });
  }

  return res.status(200).json(deleted);
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
