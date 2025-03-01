const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");
const verifyRoles = require('../../middleware/verifyRoles');
const allowedRoles = require("../../config/Allow_roles");

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(verifyRoles(allowedRoles.admin,allowedRoles.editer),employeesController.createNewEmployees)
  .put(verifyRoles(allowedRoles.admin,allowedRoles.editer),employeesController.updateEmployee)
  .delete(verifyRoles(allowedRoles.admin),employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
