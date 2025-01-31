const mongse = require("mongoose")

const connectDB = async ()=>{
    try{
        const conn = await mongse.connect(process.env.mongo_uri);
        console.log(`Mongodb Connected : ${conn.connection.host}`);
    }
    catch(err)
    {
        console.error(`Error : ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;