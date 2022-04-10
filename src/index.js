require('dotenv').config()
const { json } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const app = express()
const cors = require("cors");
app.use(cors());

app.use("/api/v1", jsonParser, require('./routes/router'));

app.use(express(json));

app.listen(3000, ()=>{
    console.log("Server running: 3000");
});

