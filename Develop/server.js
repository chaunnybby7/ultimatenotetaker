//dependencies
const { response } = require('express');
const express = require('express');

//point server to the route files 
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

//create an express server
const app = express();

//set PORT
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded( {extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

//listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}! 🚀`);
});
