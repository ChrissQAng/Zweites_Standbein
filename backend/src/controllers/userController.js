import { UserService } from "../services/index.js";

// async function postUserCtrl(req, res) {
//   try {
//     const newUser = req.body;

//     const addedUser = await UserService.addUser(newUser);
//     res.json(addedUser);
//   } catch (err) {
//     console.log(err);
//     res
//       .status(500)
//       .json({ err, message: err.message || "Could not register user" });
//   }
// }

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

async function postVerifyUserEmailCtrl(req, res) {
  try {
    const verifyEmailInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };
    const result = await UserService.verifyUserEmail(verifyEmailInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}
export const UserController = {
  // postUserCtrl,
  loginUserCtrl,
  postVerifyUserEmailCtrl,
  postRegisterUserCtrl,
};
