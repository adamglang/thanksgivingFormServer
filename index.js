const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

console.log(routes)
// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "http://hlcathanksgivingboxes.com/";

// Logging
app.use(morgan('dev'))

// Allow JSON parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross domain calls
app.use(cors());

// Consume all the routes
routes(app);

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
