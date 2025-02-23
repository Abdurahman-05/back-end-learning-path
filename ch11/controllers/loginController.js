const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");
const path = require("path");
const fsPromise = require("fs").promises;
const jwt = require('jsonwebtoken');
require('dotenv').config();



const HandlerOldUser = async (req, res) => {
  const user = req.body.user;
  const pwd = req.body.pwd;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ "message": "username and password are required!!!!" });
     const foundUser = usersDb.users.find(person => (person.username === user));
     if(!foundUser) return res.status(401).json({ "message": "username and password are required!!!!" });

     const match = await bcrypt.compare(pwd,foundUser.password);
      if(match){
          // create JWT
         const accessToken = jwt.sign(
          {"username" : foundUser.username},
          process.env.ACCESS_TOKEN_SECRET,
          {expiresIn:"30s"}
         );

         const refreshToken = jwt.sign({"username" : foundUser.username},
          process.env.REFRASH_TOKEN_SECRET,
          {expiresIn:"1d"}
         );
        const otherUsers = usersDb.users.filter(person => person.username !== user);
        const currentUser = {...foundUser,refreshToken};
        usersDb.setUsers([...usersDb.users,currentUser]);
        
        await fsPromise.writeFile(
          path.join(__dirname,"..","model","users.json"),
          JSON.stringify(usersDb.users)
        )
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // res.cookie('jwt',refrashToken,{httpOnly:true,maxAge: 24*60*60*1000});
        res.json({accessToken});
      }
      else {res.sendStatus(401)}
      
    }
    module.exports = {HandlerOldUser}









    // create JWTs
    // const accessToken = jwt.sign({'username':foundUser.username} ,process.env.ACCESS_TOKEN_SECRET,
    //   {expiresIn:"30s"}
    // );
    // const refrashToken = jwt.sign({'username':foundUser.username} ,process.env.REFRASH_TOKEN_SECRET,
    //   {expiresIn:"1d"}
    // );

    // const otherUsers = usersDb.users.filter(person => person.username !== foundUser.username);
    // const currentUser = {...foundUser,refreshToken};
    // usersDb.setUsers([...otherUsers,currentUser]);