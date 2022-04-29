# Ultimate Note Taker 📝📝

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Top Language](https://img.shields.io/github/languages/top/chaunnybby7/ultimatenotetaker)


## Description
This is a simple note taking application that allows user to save notes with a Title/Subject and description text.
This application is supported by Express.js. 

## Prerequisites 🎖
* node.js

## Installation ⌨️

1. Clone the repository to your local development environment.

```
git clone git@githubcom:chaunnybby7ultimatenotetaker.git
```
2. Run `npm install` to install all dependencies. To run this application locally, run `node server.js` in your CLI. 

3. Open http://localhost:3000 in your default browser or Insomnia.

4. Run `heroku login` and enter your login credentials.

5. Run `heroku create filename` (hint: filename being your desired file name).

6. Go to heroku and click on `Open app`.

7. The Note Taker app is live on Heroku. 

## Demo

## Deployed Link 

[ 🦄 Note Taker via Heroku App 🦄](https://unicornsnotetaker.herokuapp.com/) ✨


[📁 Note Taker Github Repo](https://github.com/chaunnybby7/ultimatenotetaker)

## Code Snippets 💻

The following code explains how the Express server initialization and setup. Routes are setup in different js files.

```
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
```

## Built With :
- [x] [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [x] [NodeJS:] (https://nodejs.org/)
    - [Express] (https://www.npmjs.com/package/express)
- [x] [Heroku] (https://www.heroku.com/platform)


## Authors
YiLin Ong
* [Github] (https://github.com/chaunnybby7)
* [LinkedIn] (https://www.linkedin.com/in/chauntelleong/)

## License 

MIT License

Copyright (c) [2022] [YiLin Ong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.