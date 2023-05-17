const express = require('express')
const cors = require('cors')
const app = express();
require("dotenv").config()


// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// database connection
const database = require("./config/mongodb")
database()


// Routes
app.use("/api", require("./route/user"))



app.listen(process.env.PORT, ()=>{
    console.log(`user is running on ${process.env.PORT}`)
})