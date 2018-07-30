// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
console.log("----------------dirname", __dirname);
console.log("----------------dirname", './dist');
app.use(express.static('./dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);