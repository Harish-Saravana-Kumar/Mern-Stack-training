const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empid : Number,
    empname : String
});

module.exports = mongoose.model("Employee",employeeSchema,"Employee");