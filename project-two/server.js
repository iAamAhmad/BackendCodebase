// bring in environment variables from a .env file
require("dotenv").config()

// import express and morgan
const express = require("express")
const morgan = require("morgan")

// create an application object
const app = express()

// define a PORT variable from the environment with a default value
const PORT = process.env.PORT || 4000
//* Route One
app.get('/', (request, response) => {
   response.send('Listening from the default Function!!!!!!')
})
//* Route 2
app.get('/contact', (request, response) => {
   response.send('Listening from the contact Function!!!!!!')
})
//* Route 3
app.get('/home', (request, response) => {
   response.send('Listening from the home Function!!!!!!')
})

//*
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({ extended: true })) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving
//* 

// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

/*
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});
*/

/*
const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  res.send(foundExpression);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
*/