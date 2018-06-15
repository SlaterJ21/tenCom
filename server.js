'use strict';

// require('dotenv').config()
//require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

//Routers
const users = require('./routes/users')
const properties = require('./routes/properties')
const contracts = require('./routes/contracts')

//use Routers
                          // app.use('/', )
app.use('/users', users)
app.use('/properties', properties)
app.use('/contracts', contracts)


// Use body parser https://www.npmjs.com/package/body-parser
// See Express/Connect top-level generic for code to use here
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// write a catch all route that will respond with status of 418
app.use((req,res,next) => {
  res.status(418).send({error: {message: "418 you teapot"}})
})


/* don't change the code below this line */
app.listen(port, function(){
  console.log("listening on port", port);
})


// your server should be named app since that is what is being exported here
module.exports = app;
