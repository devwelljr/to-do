const express = require('express');
const cors = require('cors');

/* Criação do app */
const app = express();

app.use(express.json());

app.use(cors());

/* Rotas usando router para cada rota principal */

module.exports = app;