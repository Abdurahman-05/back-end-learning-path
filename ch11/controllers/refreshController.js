// const usersDb = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data;
//   },
// };

// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const handleRefresh = (req, res) => {
//   const cookies = req.cookies;

//   if (!cookies?.jwt) return res.sendStatus(401);
//   console.log(cookies.jwt);
//   const refreshToken = cookies.jwt;

//   const foundUser = usersDb.users.find(
//     (person) => person.refreshToken === refreshToken
//   );

//   if (!foundUser) return res.sendStatus(403);

//   jwt.verify(refreshToken, process.env.REFRASH_TOKEN_SECRET, (err, decoded) => {
//     if (err || foundUser.username !== decoded.username)
//       return res.sendStatus(403);
//     const accessToken = jwt.sign(
//       { username: decoded.username },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "30s" }
//     );
//     res.json({ accessToken });
//   });
// };

// module.exports = { handleRefresh };

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

const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefresh = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(403);
  const refreshToken = req.cookies.jwt;

  const foundUser = usersDb.users.find(
    (person) => person.refreshToken === refreshToken
  );

  if(!foundUser) return res.sendStatus(403);
  // jwt.verify(
  //   refrashToken,
  //   process.env.REFRESH_TOKEN_SECRET,
  //   (err,decoded)=>{
  //     if(err || foundUser.username !== decoded.username) return res.sendStatus(401);
  //     const accessToken = jwt.sign(
  //     {"username":decoded.username},
  //     process.env.ACCESS_TOKEN_SECRET,
  //     {expiresIn: "15s"}
  //     );
  //   }
  // )
  jwt.verify(refreshToken, process.env.REFRASH_TOKEN_SECRET, (err, decoded) => {
        if (err || foundUser.username !== decoded.username)
          return res.sendStatus(403);
        const accessToken = jwt.sign(
          { username: decoded.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );
        res.json({ accessToken });
      });
  res.json({accessToken});

};


module.exports = { handleRefresh };
