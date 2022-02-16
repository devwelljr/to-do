const Joi = require("joi");

/* Schemas para validação com Joi: */
const createSchema = Joi.object({
  username: Joi.string().min(4).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

/* Validação do registro de novo usuário */
const registerValidation = async (req, res, next) => {
  const { error } = createSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  next();
};

/* Validação do Login */
const loginValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  next();
};

module.exports = {
  registerValidation,
  loginValidation,
};
