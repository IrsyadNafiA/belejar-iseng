import { json } from "express";
import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../../helper/helpers.mjs";
import { User } from "../../model/users.mjs";

const registerUser = async (request, response) => {
  const result = validationResult(request);
  if (!result.isEmpty()) return response.status(400).send(result.array());

  // create user
  const data = matchedData(request);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  try {
    const savedUser = await newUser.save();
    return response.status(201).send(savedUser);
  } catch (err) {
    return response.status(400).send("Username already exists");
  }
};

const loginUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "Login success",
      user: {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
        role: req.user.role,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

const logoutUser = async (request, response) => {
  request.logout((err) => {
    if (err) return response.sendStatus(401);
    response.sendStatus(200);
  });
};

const cekLogin = async (request, response) => {
  return response.status(200).json(request.user);
};

export { registerUser, loginUser, logoutUser, cekLogin };
