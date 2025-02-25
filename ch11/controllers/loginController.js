// const usersDb = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data;
//   },
// };

// const bcrypt = require("bcrypt");
// const path = require("path");
// const fsPromise = require("fs").promises;
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const handleOldUser = async (req, res) => {
//   const user = req.body.user;
//   const pwd = req.body.pwd;

//   if (!user || !pwd)
//     return res
//       .status(400)
//       .json({ "message": "username and password are required!!!!" });
//      const foundUser = usersDb.users.find(person => (person.username === user));
//      if(!foundUser) return res.status(401).json({ "message": "username and password are required!!!!" });

//      const match = await bcrypt.compare(pwd,foundUser.password);
//       if(match){
//           // create JWT
//          const accessToken = jwt.sign(
//           {"username" : foundUser.username},
//           process.env.ACCESS_TOKEN_SECRET,
//           {expiresIn:"30s"}
//          );

//          const refreshToken = jwt.sign({"username" : foundUser.username},
//           process.env.REFRASH_TOKEN_SECRET,
//           {expiresIn:"1d"}
//          );
//         const otherUsers = usersDb.users.filter(person => person.username !== user);
//         const currentUser = {...foundUser,refreshToken};
//         usersDb.setUsers([...usersDb.users,currentUser]);

//         await fsPromise.writeFile(
//           path.join(__dirname,"..","model","users.json"),
//           JSON.stringify(usersDb.users)
//         )
//         res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

//         // res.cookie('jwt',refrashToken,{httpOnly:true,maxAge: 24*60*60*1000});
//         res.json({accessToken});
//       }
//       else {res.sendStatus(401)}

//     }
//     module.exports = {handleOldUser}

// const usersDb = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data;
//   },
// };

// const fsPromise = require("fs").promises;
// const path = require("path");
// const bcrypt = require("bcrypt");

// const handleNewUser = async (req, res) => {
//   const user = req.body.user;
//   const pwd = req.body.pwd;

//   if (!user || !pwd)
//     return res
//       .status(400)
//       .json({ missage: "username and password are required!!!!" });

//   const duplicate = usersDb.users.find((person) => person.username === user);

//   if (duplicate) return res.sendStatus(409);
//   try {
//     const hashedpwd = await bcrypt.hash(pwd, 10);
//     const newUser = { username: user, password: hashedpwd };
//     usersDb.setUsers([...usersDb.users, newUser]);
//     await fsPromise.writeFile(
//       path.join(__dirname, "..", "model", "users.json"),
//       JSON.stringify(usersDb.users)
//     );
//     console.log(usersDb.users);
//     res.status(201).json({ success: `new user ${user} created` });
//   } catch (error) {
//     return res.status(500).json({ missage: error.message });
//   }
// };

// module.exports = { handleNewUser };


const bcrypt = require("bcrypt");
const fsPromises = require("fs").promises;
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleOldUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = userDB.users.find((person) => person.username === user);
  if (!foundUser) return res.status(401).json({ message: "User not found." });

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // createJWT
    const accessToken = await jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );

    const refreshToken = await jwt.sign(
      { username: foundUser.username },
      process.env.REFRASH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    const currentUser = { ...foundUser, refreshToken };
    otherUser = userDB.users.filter(
      (person) => person.username !== foundUser.username
    );
    userDB.setUsers([...otherUser, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(userDB.users),
    );
    res.cookie("jwt",refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
      res.json({accessToken});
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleOldUser };
