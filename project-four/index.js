const express = require("express");
const app = express();
const PORT = 3007;

app.get('/', (req, res) => {
   res.send('Main Umair Hun');
});

//* Route 2

app.get('/home', (req, res) => {
   res.send('Calling From Home!');
});


//* Route 3

app.get('/contact', (req, res, next) => {
   res.send('Calling From contact!');
   next();
});

app.listen(PORT,
   console.log('Server is Running at my PORT!'));

   