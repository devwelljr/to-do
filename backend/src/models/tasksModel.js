const { ObjectID } = require("mongodb");
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

  const tasks = await db.collection("tasks").findMany({ email }).toArray();

  return tasks;
};

const updateTask = async (id, newDescription) => {
  const db = await connection();

  const upTask = await db
    .collection("tasks")
    .findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: { description: newDescription } }
    );

  return upTask;
};

const deleteTask = async (id) => {
  const db = await connection();

  if (ObjectID.isValid(id)) {
    const deletedTask = await db
      .collection("tasks")
      .deleteOne({ _id: ObjectID(id) });

    return deletedTask;
  }
  return null;
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
