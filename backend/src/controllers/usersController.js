require('dotenv').config();

const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { creatUser, login } = require('../services/usersService');

/* Criação de um cliente */
const create = rescue(async (req, res) => {
	const { username, email, password } = req.body;

	const newUser = await creatUser({ username, email, password });

	if (newUser.err) {
		return res.status(406).send(newUser.err);
	}

	return res.status(201).send(newUser);
});

/* Login de um cliente */
const Login = rescue(async (req, res) => {
	const { email, password } = req.body;

	const User = await login(email, password);

	if (User.err) {
		return res.status(406).send(User.err);
	}

	/* Gera token JWT */
	const payload = { email, password };
	const token = jwt.sign(payload, process.env.SECRET);

	res.status(200).send(`Seu token para autorizar operações: ${ token }`);
});

module.exports = { create, Login };
