const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./config/connection.js');
dotenv.config();
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static('Public'));
app.get('/', (req, res) => {
   res.send('Hello from Here')
});

app.listen(port, (req, res) => {
   console.log(" The Server is running!");

});