const connection = require("./connection");

/* Criação de um cliente */
const createUser = async (user) => {
  const db = await connection();
  const { username, email, password } = user;

  await db.collection("users").insertOne({ username, email, password });

  const response = await findByEmail({ email });

  return response;
};

/* Verificar Login */
const loginModel = async (email, password) => {
  const db = await connection();

  const response = await db
    .collection("users")
    .findOne({ email, password }, { projection: { password: 0 } });

  return response;
};

/* Encontrar cliente pelo email */
const findByEmail = async (email) => {
  const db = await connection();

  const response = await db
    .collection("users")
    .findOne({ email }, { projection: { password: 0 } });

  return response;
};

module.exports = {
  createUser,
  findByEmail,
  loginModel,
};
