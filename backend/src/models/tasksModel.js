const { ObjectId } = require("mongodb");
const connection = require("./connection");

const createTask = async (email, description) => {
  const db = await connection();

  const { insertedId } = await db
    .collection("tasks")
    .insertOne({ email, description });

  return { _id: insertedId, email, description };
};

const getTasks = async (email) => {
  const db = await connection();

  const tasks = await db.collection("tasks").find({ email }).toArray();

  return tasks;
};

const updateTask = async (id, newDescription) => {
  const db = await connection();

  const upTask = await db
    .collection("tasks")
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { description: newDescription } }
    );

  return upTask;
};

const deleteTask = async (id) => {
  const db = await connection();

  if (ObjectId.isValid(id)) {
    const deletedTask = await db
      .collection("tasks")
      .deleteOne({ _id: ObjectId(id) });

    return deletedTask;
  }
  return null;
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
