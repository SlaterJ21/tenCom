'use strict';

// require('dotenv').config()
//require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

//Routers
const users = require('./routes/user')
const properties = require('./routes/user')
const contracts = require('./routes/contracts')


// Use body parser https://www.npmjs.com/package/body-parser
// See Express/Connect top-level generic for code to use here
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// write a route for getting all of the cookies, respond with a 200 status code
app.get('/cookies/', (req,res,next) => {
  res.sendStatus(200)
})


// write a route for getting one of the cookies, respond with the parameter id and make sure the id is converted to a string before sending
app.get('/cookies/:id', (req,res,next) => {
  res.status(200).send(req.params.id)
})

// write a route for creating a cookie, return the body of the request that was sent to your route
app.post('/cookies', (req,res,next) => {
  res.status(200).send(req.body)
})

// write a patch route for editing a cookie, return an object with the id and the change that was requested
app.patch('/cookies/:id', (req,res,next) => {
  let result = { id:req.params.id, name:req.body.name }
  res.status(200).send(result)
})

// write a route for deleting one of the cookies, respond with the parameter id
app.delete('/cookies/:id', (req,res,next) => {
  res.status(200).send(req.params.id)
})

// write a catch all route that will respond with status of 418 ;)
//https://sitesdoneright.com/blog/2013/03/what-is-418-im-a-teapot-status-code-error
app.use((req,res,next) => {
  res.status(418).send({error: {message: "418 you teapot"}})
})


/* don't change the code below this line */
app.listen(port, function(){
  console.log("listening on port", port);
})


// your server should be named app since that is what is being exported here
module.exports = app;
