const express = require("express");
const app = express();
const PORT = 3007;

app.get('/', (req, res) => {
   res.send('Main Umair Hun');
   res.send('Hi There!');
});


app.listen(PORT,
   console.log('Server is Running at my PORT!'));