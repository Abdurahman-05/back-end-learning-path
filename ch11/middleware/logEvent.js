// const path = require("path");
// const fs = require("fs");
// const fsp = require("fs").promises;
// const express = require('express');


// const logEvent = async (missage, fileName) => {
//   if (!fs.existsSync(path.join(__dirname,'..', "logs"))) {
//     await fsp.mkdir(path.join(__dirname, '..',"logs"));
//   }

//   try {
//     await fsp.appendFile(
//       path.join(__dirname, "..","logs", `${fileName}`),
//       missage,
//       "utf-8"
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

// const logger = (req, res, next) => {
//     logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`, "log.text");
//     next();
// };

// module.exports = {logEvent,logger};
