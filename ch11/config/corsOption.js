const path = require("path");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const whitelist = ['https://www.google.com','https://www.example.com' ,'https://127.0.0.1:3500'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some browsers choke on 204
}


module.exports = corsOptions;