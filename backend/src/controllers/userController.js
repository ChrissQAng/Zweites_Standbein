import { UserService } from "../services/index.js";

async function postUserCtrl(req, res) {
  try {
    const newUser = req.body;

    const addedUser = await UserService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register user" });
  }
}

async function loginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserService.loginUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not login customer" });
  }
}

export const UserController = {
  postUserCtrl,
  loginUserCtrl,
};
