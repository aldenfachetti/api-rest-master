const express = require('express'); // Define Express
const bodyParser = require('body-parser'); // Define Body Parser

const app = express(); // Create Application

app.use(bodyParser.json()); // To understand when send a request for API with informations in JSON
app.use(bodyParser.urlencoded({ extended: false })); // To understand when pass parametres and encode in URL

require('./app/controllers/index')(app);

app.listen(3000); // Port that you want to listen