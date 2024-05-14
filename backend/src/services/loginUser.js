import { User } from "../models/user.js";
import { createToken } from "../utils/createToken.js";
import { hash } from "../utils/hash.js";
import { userToView } from "./help.js";

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid login");

  if (!user.isEmailVerified)
    throw new Error("Email not veryfied, login aborted");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;

  if (!correctPassword) throw new Error("Wrong Password");

  const accessToken = createToken(user, "access"); // header.payload.signature
  //   const refreshToken = createToken(user, "refresh"); // header.payload.signature

  return { user: userToView(user), tokens: accessToken };
}
