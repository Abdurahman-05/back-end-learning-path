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



const userDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const  bcrypt =  require("bcrypt")
const  fsPromises = require("fs").promises;
const path = require('path');

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) return res.status(400).json({ message: "Username and password are required." });

  const duplicate = userDB.users.find((person) => person.username === user);
  if (duplicate) return res.status(409).json({ message: "User already exists." });

  try {
    const hashpwd = await bcrypt.hash(pwd, 10);
    const newUser = {"username":user,"password":hashpwd};
    userDB.setUsers([...userDB.users,newUser]);
    await fsPromises.writeFile(
      path.join(__dirname,"..","model","users.json"),
      JSON.stringify(userDB.users)
  );
    res.json({message: `the user ${user} is regitered!!!!`})

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {handleNewUser};