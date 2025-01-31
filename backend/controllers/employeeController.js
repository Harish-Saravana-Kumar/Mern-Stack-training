const Employee = require("../models/Employee");

exports.createEmployee = async (req,res)=>{
    try{
        const {empid,empname} = req.body;
        const newEmployee = new Employee({empid,empname});
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch(err)
    {
        res.status(500).json({error : err.message});
    }
    
};

exports.getEmployee = async (req,res)=>{
    try{
        const employeeData = await Employee.find();
        res.status(200).json(employeeData);
    }
    catch(err)
    {
        res.status(500).json({error : err.message});
    }
};

exports.editEmployee = async (req,res)=>{
    try{
        const {id} = req.params; // here id will also work instead of _id.
        const {empid,empname} = req.body;

        const updateEmployee = await Employee.findByIdAndUpdate(id,{empid,empname},{new:true}); // {new:true} it is used when the put method return the previous data..
        if(!updateEmployee)
        {
            return res.status(404).json({message : "Employee not found!!!!!......." });
        }
        res.status(200).json({updateEmployee});
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
};

exports.deleteEmployee = async (req,res)=>{
    try{
        const {id} = req.params;
        await Employee.findByIdAndDelete(id);
        res.status(200).json({message : "Deleted successfully...."});
    }
    catch(err)
    {
        res.status(500).json({error: err.messge});
    }
    
};