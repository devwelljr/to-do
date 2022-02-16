const Joi = require("joi");

/* Schemas para validação com Joi: */
const createSchema = Joi.object({
  description: Joi.string().required(),
});

const updateSchema = Joi.object({
  newDescription: Joi.string().required(),
});

const createValidation = async (req, res, next) => {
  const { error } = createSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  next();
};

const updateValidation = async (req, res, next) => {
  const { error } = updateSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  next();
};

module.exports = {
  createValidation,
  updateValidation,
};
