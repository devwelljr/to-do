const express = require("express");

const { create, Login } = require("../controllers/usersController");

const {
  registerValidation,
  loginValidation,
} = require("../middlewares/usersValidation");

const router = express.Router();

router.post("/", registerValidation, create);

router.post("/login", loginValidation, Login);

module.exports = router;
