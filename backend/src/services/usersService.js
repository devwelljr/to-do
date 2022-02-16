const { createUser, findByEmail, loginModel } = require('../models/usersModel');

/* Criação de um cliente */
const creatUser = async ({ username, email, password }) => {
	const user = { username, email, password };

	const isExist = await findByEmail(email);

	const err = { err: { message: 'user exist' } };
	if (isExist) return err;

	await createUser(user);
	
	const newUser = await findByEmail(email);
	const response = { user: newUser };

	return response;
};

/* Login de um cliente */
const login = async (email, password) => {
	const User = await loginModel(email, password);

	const err = { err: { message: 'user not exist' } };
	if (!User) return err;

	return User;
};

module.exports = {
	creatUser,
	login,
};