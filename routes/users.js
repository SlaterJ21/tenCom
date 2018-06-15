// write a route for creating a users, return the body of the request that was sent to your route
app.post('/users', (req,res,next) => {
  res.status(200).send(req.body)
})

// write a route for getting one of the users, respond with the parameter id and make sure the id is converted to a string before sending
app.get('/users/:id', (req,res,next) => {
  res.status(200).send(req.params.id)
})

// write a patch route for editing a users, return an object with the id and the change that was requested
app.patch('/users/:id', (req,res,next) => {
  let result = { id:req.params.id, name:req.body.name }
  res.status(200).send(result)
})

// write a route for deleting one of the users, respond with the parameter id
app.delete('/users/:id', (req,res,next) => {
  res.status(200).send(req.params.id)
})
