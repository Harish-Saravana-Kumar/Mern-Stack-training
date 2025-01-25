// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;



// let db;
// let objectId = mongodb.ObjectId;
// async function getdb()
// {
//     const client = await mongoClient.connect('mongodb://127.0.0.1:27017');
//     db = client.db('fmdb');
//     if(db)
//     {
//         console.log('DataBase Connected Sucessfully...');
//     }
//     else
//     {
//         console.log('DataBase Connection failed!!!...');
//     }
//     return db;
// }

const mongse = require("mongoose");

let db;

function getdb()
{
    mongse.connect('mongodb://127.0.0.1:27017/emp').then(()=>{
        console.log('db connected.....');
    })
    .catch(()=>{
        console.log("db error!!!");
    })
}

getdb()
module.exports = {getdb};