import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export async function doJwtAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  if (!req.headers.authorization) return _invalidAuth();

  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  try {
    const verfiedClaims = jwt.verify(tokenString, jwtSecret);
    req.authenticatedId = verfiedClaims.sub;
    next();
  } catch (err) {
    console.log(err);
    return _invalidAuth();
  }
}
