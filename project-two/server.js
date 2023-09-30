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
   response.send('Listening from the default Function!!!')
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