// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const verifyJWT = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) return res.sendStatus(401);

//   console.log(authHeader); // Debugging: Log the token
//   const token = authHeader.split(" ")[1];

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) return res.sendStatus(403); // Invalid token

//     req.user = decoded.username; // Attach user info to request
//     next(); // Move to the next middleware
//   });
// };

// module.exports = verifyJWT;

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
 
  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded) =>{
      if(err) return res.sendStatus(403);
      req.user = decoded.userInfo.username;
      req.roles = decoded.userInfo.roles;
      

    next();
    }
  );
};

module.exports = verifyJWT;