const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");
const path = require("path");
const fsPromise = require("fs").promises;

const HandlerOldUser = async (req, res) => {
  const user = req.body.user;
  const pwd = req.body.pwd;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ missage: "username and password are required!!!!" });
     const foundUser = usersDb.users.find(person => (person.username === user));
     if(!foundUser) return res.sendStatus(401);

     const match = await bcrypt.compare(pwd,foundUser.password);
      (match)?
      res.json({"sucess" : `User ${user} is logged in!`}):
      res.sendStatus(401);

     }
module.exports = {HandlerOldUser}