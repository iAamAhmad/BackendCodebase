
//  Here's script with both routes added.
const express = require('express');
const app = express();
app.get('/', function (request, response) {
   response.send('Home');
});
app.get('/about', function (request, response) {
   response.send('Know More About Us');
});
app.listen(3000, function () {
   console.log('Listening on port 3000');
});