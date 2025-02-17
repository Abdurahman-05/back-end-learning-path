const express = require('express');
const {logEvent} = require('./logEvent.js');

const errorHandler = (err,req,res,next)=>{
  logEvent(`${err.name}: ${err.message}\n`,"errorLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message);
}
module.exports = errorHandler;