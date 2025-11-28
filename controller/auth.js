const jwt = require("jsonwebtoken");

const SECRET_KEY = "veer@5456464"; // change to env variable in production

// Generate JWT token
function generateToken(payload) {
 return jwt.sign(payload, SECRET_KEY, {
    expiresIn: "1h", // token expiration
  });
}
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, message: err.message };
  }
}
module.exports = {generateToken,verifyToken};
