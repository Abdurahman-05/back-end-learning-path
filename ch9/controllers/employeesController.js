const express = require('express');
const app = express();
const path = require('path');

const data = {};
data.employees = require("../data/employees.json");

const getAllEmployees = (req, res) => {
  res.json(data.employees);
  
}
const createNewEmployees = (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
  });
}
const updateEmployee = (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
  });
}

const deleteEmployee = (req, res) => {
  res.json({ "id": req.body.id });
}
const getEmployee = (req, res) => {
  res.json({ "id": req.body.id });
}


module.exports = {
  getAllEmployees,
  createNewEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployee,
}




