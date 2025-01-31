const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const dbo = require('./db')
const objid = dbo.objectId;

app.engine('hbs', // hbs - engine name
exhbs.engine({
    layoutsDir: 'viewsfold/',
    defaultLayout : 'maincopy',
    extname : 'hbs'
})
);

app.set('view engine', 'hbs'); //view engine - default name , hbs - engine name
app.set('views','viewsfold'); // views - default name , viewsfold - folder , can be added more..
app.use(bodyParser.urlencoded({extended : true}));

//routes
app.get('/',async (req,res)=>{
    let edit_id,edit_emp;
    let database = await dbo.getdb(); // function ensures connectivity
    const collection = database.collection('emp'); // creating collection (i.e.,name)
    // await collection.insertOne({name:'Harish S',roll:47}) // if we perform any operation db is created in our mongoshell
    const cursor = collection.find({}); // retrieve all datas using cursor object
    let datas = await cursor.toArray(); // using functions in cursor object (i.e., .toArray() || .forEach())
    let msg = '';
    if(req.query.edit_idd)
    {
        edit_id = req.query.edit_idd
        edit_emp = await collection.findOne({_id : new objid(edit_id) })
    }
    if(req.query.delete_idd)
    {
        delete_id = req.query.delete_idd;
        console.log('Delete request for _id:', delete_id);
        await collection.deleteOne({_id : new objid(delete_id)});
        res.redirect('/?status=3')
    }
    
    if(req.query.status==='1'){
            msg = 'Inserted Successfully....';
    }
    else if(req.query.status==='2'){
        msg = 'Updated Successfully....';
    }
    else if(req.query.status === '3')
    {
        msg = "deleted Succesfully...."
    }
    
    
    console.log('the data', datas); // printing data
    res.render('maincopy',{msg,datas,edit_id,edit_emp});
    
    
});

// start the server with msg
app.listen(8000,()=>{
    console.log('Listening on port 8000....');
});

app.post('/empinfo', async(req,res)=>{
    const database = await dbo.getdb();
    const collection = database.collection('emp');
    const employee = {empid : req.body.eid , empname : req.body.ename};

    await collection.insertOne(employee);
    res.redirect('/?status=1');
}
);

app.post('/updateinfo/:e_id',async (req,res)=>{
    const database = await dbo.getdb();
    const collection = database.collection('emp');
    const employee = {empid : req.body.eid , empname : req.body.ename};
    let ed_idd = req.params.e_id;
    await collection.updateOne({_id : new objid(ed_idd)},{$set : employee});

    res.redirect('/?status=2');
})


