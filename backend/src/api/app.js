const express = require('express');
const cors = require('cors');

const usersRouter = require('../routers/usersRouter');

/* Criação do app */
const app = express();

app.use(express.json());

app.use(cors());

/* Rotas usando router para cada rota principal */
app.use('/users', usersRouter)

module.exports = app;