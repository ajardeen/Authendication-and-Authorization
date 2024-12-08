const express = require('express');
const app = express();
require('dotenv').config();
const connectMongoDB = require('./Config/ConfigMongoDB')
const port = process.env.PORT || 5000
const bodyParser = require('body-parser');
const UserRoutes = require('./Routes/UserRoutes')

//middleware
app.use(bodyParser.json());

// Routes
app.use("/api/user", UserRoutes);

app.listen(port,(err)=>{
    err ? console.log(err.message) : console.log("Successfully Server Started in port in",port);
})

//connect MongoDB
connectMongoDB();