const dotenv = require("dotenv");
const connectDB = require("./backend/configs/db");
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const employeeRoutes = require("./backend/routes/employee")

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);

const PORT = process.env.port || 6000 || 4000 ; // we can configure as many port as want if it is busy

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT})`);
})