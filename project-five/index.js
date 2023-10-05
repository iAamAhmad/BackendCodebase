const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./config/connection.js');
dotenv.config();
let port = process.env.PORT || 8080;
const userRoutes = require("./routes/user");


app.use(bodyParser.json());
app.use(express.static('Public'));
app.use('/user', userRoutes);
app.get('/', (req, res) => {
   res.send('Hello from Here')
});

app.listen(port, (req, res) => {
   console.log(" The Server is running!");
});