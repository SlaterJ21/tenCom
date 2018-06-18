const express = require('../node_modules/express')
const router = express.Router()
const knex = require('../knex')

// write a route for creating a properties, return the body of the request that was sent to your route
router.post('/', (req,res,next) => {
  knex('properties')
    .insert({
      "addressline1": req.body.addressline1,
      "addressline2": req.body.addressline2,
      "city": req.body.city,
      "state": req.body.state,
      "postalcode": req.body.password
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
  res.status(200).send(req.body)
})

// write a route for getting one of the properties, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/', (req,res,next) => {
  knex('properties')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
  // res.status(200).send(req.params.id)
})

// write a route for getting one of the properties, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/:id', (req,res,next) => {
  knex('properties')
  .where('id',req.params.id)
  .then((rows) => {
    res.json(rows)
  })
  .catch((err) => {
    next(err)
  })
  // res.status(200).send(req.params.id)
})

// write a route for deleting one of the properties, respond with the parameter id
router.delete('/properties/:id', (req,res,next) => {
  knex('properties')
  .where('id', req.params.id)
  .first()
  .then((row) => {
    if(!row) return next()
    knex('properties')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.send(`ID ${req.params.id} Deleted`)
      })
  })
  .catch((err) => {
    next(err)
  })
  // res.status(200).send(req.params.id)
})

// router.use((req, res, next) => {
//   res.status(200).send('what up properties ninja')
// })

module.exports = router
