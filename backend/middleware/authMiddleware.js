// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   // const token = req.header("Authorization").split(" ")[1];;
//   const authHeader = req.header("Authorization");

// if (!authHeader) {
//   return res.status(401).json({ msg: "No token" });
// }

// const token = authHeader.split(" ")[1];

//   if (!token) return res.status(401).json({ msg: "No token" });

//   try {
//     const decoded = jwt.verify(token, "secretkey");
//     req.user = decoded;
//     // now contains:
//     // { id: "...", role: "admin" }
//     next();
//   } catch {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };

// module.exports = authMiddleware;
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Malformed token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;