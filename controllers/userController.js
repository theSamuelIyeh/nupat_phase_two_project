const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createUser_post = async (req, res) => {
  let gender;
  if (req.body.gender == "male" || req.body.gender == "female") {
    gender = req.body.gender;
  }
  const user = new User({
    name: req.body.name,
    gender: gender,
  });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const getUser_get = async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    console.log(user);
    const token = generateJwt(user);
    console.log(token);
    res.status(200).json({ user, token: token });
  } catch (err) {
    console.log(err);
    res.json({ error: "user not found" });
  }
};

const updateUser_put = async (req, res) => {
  let gender;
  if (req.body.gender == "male" || req.body.gender == "female") {
    gender = req.body.gender;
  }
  let user;
  try {
    user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.gender = gender;
    await user.save();
    res.status(200).json({ message: "user Updated" });
  } catch {
    if (user == null) {
      res.status(400).json({ message: "Provide a valid user" });
    } else {
      res.status(500).json({ message: "Error updating user" });
    }
  }
};

const deleteUser_delete = async (req, res) => {
  try {
    user = await User.findById(req.params.id);
    await user.deleteOne();
    res.status(200).json({ message: "user deleted Successfully" });
  } catch {
    if (user == null) {
      res.status(400).json({ message: "Provide valid user" });
    } else {
      res.status(500).json({ message: e.message });
    }
  }
};

const allUsers_get = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch {
    users = [];
  }
  res.json(users);
};

const allMale_get = async (req, res) => {
  let users;
  try {
    users = await User.find({ gender: "male" });
  } catch {
    users = [];
  }
  res.json(users);
};

const generateJwt = (user) => {
  console.log(user);
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "15s",
  });
  console.log(token);
  return token;
};

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({ error: "Pls input access token" });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid access token" });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  createUser_post,
  getUser_get,
  updateUser_put,
  deleteUser_delete,
  allUsers_get,
  allMale_get,
  verifyJwt,
};
