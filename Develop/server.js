// dependencies
const express = require('express');

//point server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express server 
const app = express();

//PORT 
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//server listening on PORT
app.listen(PORT, () => {
    console.log(`⚡️ API server now on port ${PORT}! 🚀`);
});
