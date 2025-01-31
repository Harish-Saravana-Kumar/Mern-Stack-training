const express = require("express");

const {createEmployee , getEmployee , editEmployee , deleteEmployee} = require("../controllers/employeeController");

const router = express.Router();

router.post("/",createEmployee);
router.get("/", getEmployee);
router.put("/:id",editEmployee);
router.delete("/:id",deleteEmployee);

module.exports = router;