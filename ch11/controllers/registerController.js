const usersDB = {
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

  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.status(409).json({ message: "User already exists." });

  try {
    const hashpwd = await bcrypt.hash(pwd, 10);
    const newUser = {"username":user,"password":hashpwd};
    usersDB.setUsers([...usersDB.users,newUser]);
    await fsPromises.writeFile(
      path.join(__dirname,"..","model","users.json"),
      JSON.stringify(usersDB.users)
  );
    res.json({message: `the user ${user} is regitered!!!!`})

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {handleNewUser};