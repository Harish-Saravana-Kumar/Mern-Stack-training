const mongse = require("mongoose");

function getdb(){
    mongse.connect('mongodb://127.0.0.1:27017/emp') // connection string - 'mongodb://127.0.0.1:27017/emp'
    .then(()=>{
        console.log("datbase connected..........");
    })
    .catch(()=>{
        console.log("Sorry!!!! , database connection failed.");
    })
}

module.exports = {getdb};