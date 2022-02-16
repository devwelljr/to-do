const jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel");

/* Validação do JWT e de usuário */
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "missing auth token" });
  }

  try {
    const { email } = jwt.verify(token, process.env.SECRET);

    const user = await userModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "jwt malformed" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
