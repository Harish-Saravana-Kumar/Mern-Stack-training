const express = require("express");
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const appData = express();
const dbo = require("./db");
const StudentModel = require("./models/stuModel");

dbo.getdb();

appData.engine('hbs',
    exhbs.engine({
        layoutsDir:'viewsfold/',
        defaultLayout:'maincopy',
        extname:'hbs',
        runtimeOptions:{
            allowProtoPropertiesByDefault:true,
            allowProtoMethodsByDefault : true
        }
    })
);

appData.set('view engine','hbs');
appData.set('views','viewsfold');

appData.use(bodyParser.urlencoded({extended : true}));

appData.post('/stuInfo',async (req,res)=>{
    const student = {stuId: req.body.sid , stuName : req.body.sname};
    const newbookDoc = new StudentModel(student); 
    newbookDoc.save();
    res.redirect('/?status=1');
});

appData.post('/updateInfo/:e_id',async (req,res)=>{
    const student = {stuId : req.body.sid , stuName : req.body.sname};
    let ed_idd = req.params.e_id;
    await StudentModel.findOneAndUpdate({_id:ed_idd},student);
    res.redirect('/?status=2');
});

appData.get('/',async(req,res)=>{
    let edit_id,edit_stu,delete_id;
    let datas = await StudentModel.find({});
    console.log(datas)
    let msg = '';
    if(req.query.status === '1')
    {
        msg = "Inserted successfully";
    }
    else if(req.query.status === '2')
    {
        msg = "Updated Successfully";
    }
    else if(req.query.status === '3')
    {
        msg = "Deleted Successfully";
    }
    if(req.query.edit_idd)
    {
        edit_id = req.query.edit_idd;
        edit_stu = await StudentModel.findOne({_id:edit_id});
    }
    if(req.query.delete_idd)
    {
        delete_id = req.query.delete_idd;
        await StudentModel.deleteOne({_id:delete_id});
        res.redirect('/?status=3');
    }
    res.render('maincopy',{msg,datas,edit_id,edit_stu});
});

appData.listen(7000,()=>{
    console.log('listening on port 7000........');
})