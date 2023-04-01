const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/TODORoute')
//require('dotenv').config()
//const cors = require("cors")
const app = express()
const PORT = process.env.port || 5000
 
//app.use(express.json());
//app.use(cors());

mongoose
    .connect("MONGODB_URL = mongodb+srv://pratisha:pratisha2208@cluster0.3mocm64.mongodb.net/TODO-APP?retryWrites=true&w=majority")
         
    .then(() => console.log(' Connected To MongoDB...'))
    .catch((err) => console.error(err))

 //routes
app.use(routes)

app.listen(PORT, () => console.log('Listening on: ${PORT}'))