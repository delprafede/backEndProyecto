const bcrypt = require("bcrypt");
const Users = require("../models/userModels");
const Hash = require("../helpers/password.helpers");
const Compare = require("../helpers/password.helpers");
const createAccesToken = require("../helpers/jwt");

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const hashedPassword = await Hash(password);

    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });
    const userSaved = await Users.create(newUser);
    res
      .status(200)
      .send({ message: "registrado exictosamente", data: userSaved });
  } catch (err) {
    res.status(500).send({ status: "ERR", data: err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await Users.findOne({ email });

    if (!userFound)
      return res.status(400).send({
        message: "Usuario o contrasena erronea",
      });
    // const validPass = await Compare(password, userFound.password);
    const validPass = await bcrypt.compare(password, userFound.password)
    if (!validPass)
      return res.status(400).send({ message: "Usuario o contrasena erronea" });
    //token
    const token = await createAccesToken({ id: userFound._id });
    res.cookie("token", token);

    //(dto)

    res
      .status(200)
      .json({ ok: true, logged: validPass, user: userFound, token: token });
  } catch (error) {
    res.status(400).send
    ({ message: error.message });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    res.status(200).json({ message: "Se cerro sesion" });
  } catch (error) {
   res.send(message.error);
  }
};

const profile = async (req, res) => {
const userfound = await Users.findById(req.user.id)

if(!userfound) return res.status(400).send({messaje: "usuario no encontrado"})

res.status(200).json({
  id: userfound._id,
  name: userfound.name,
  email: userfound.email,
})

};
module.exports = {
  register,
  login,
  logout,
  profile,
};
