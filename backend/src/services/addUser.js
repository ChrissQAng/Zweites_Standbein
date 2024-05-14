import { User } from "../models/user.js";
import { generateRandSalt, hash } from "../utils/hash.js";
import { userToView } from "./help.js";

export async function addUser({ firstName, lastName, email, role, password }) {
  const foundUserWithEmail = await User.findOne({ email });
  if (foundUserWithEmail)
    throw new Error("user with this email already exists");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);

  const user = await User.create({
    firstName,
    lastName,
    email,
    role,
    passwordHash,
    passwordSalt,
  });

  return userToView(user);
}
