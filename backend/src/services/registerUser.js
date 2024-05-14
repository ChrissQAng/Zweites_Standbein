import { User } from "../models/user.js";
import { generateRandSalt, hash } from "../utils/hash.js";
import { sendEmail } from "../utils/sendEmail.js";
import { generateRandomSixDigitCode } from "../utils/sixDigitCode.js";
import { userToView } from "./help.js";

export async function registerUser({
  firstName,
  lastName,
  role,
  email,
  password,
}) {
  const foundUserWithEmail = await User.findOne({ email });

  if (foundUserWithEmail)
    throw new Error("User with this email aready has an account");

  const passwordSalt = generateRandSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);

  const sixDigitCode = generateRandomSixDigitCode();

  const user = await User.create({
    firstName,
    lastName,
    email,
    role,
    passwordHash,
    passwordSalt,
    isEmailVerified: false, // can be set to true via NEW /verifyEmail endpoint
    sixDigitCode,
  });
  await sendEmailVerification(user);
  return userToView(user);
}

async function sendEmailVerification(user) {
  return sendEmail({
    to: user.email,
    subject: "Welcomne to Todo.io",
    text: `Hi ${user.firstname},
    welcome to Zweites Standbein 🎉!!!
    Please enter the below six-digit-code, verify your account to be able to login.
    ${user.sixDigitCode}
    See you on the other side :)
    - Chris from Zweites Standbein
    `,
  });
}
