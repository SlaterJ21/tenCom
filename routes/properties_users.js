const express = require('../node_modules/express')
const router = express.Router()
const knex = require('../knex')

// write a route for creating a properties_users, return the body of the request that was sent to your route
router.post('/', (req,res,next) => {
  knex('properties_users')
    .insert({
      "property_id": req.body.property_id,
      "tenant_id": req.body.tenant_id,
      "manager_id": req.body.manager_id,
      "contract_id": req.body.contract_id
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

// write a route for getting one of the properties_users, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/', (req,res,next) => {
  knex('properties_users')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
  // res.status(200).send(req.params.id)
})

// write a route for getting one of the properties_users, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/:id', (req,res,next) => {
  knex('properties_users')
  .where('id',req.params.id)
  .then((rows) => {
    res.json(rows)
  })
  .catch((err) => {
    next(err)
  })
  // res.status(200).send(req.params.id)
})

// router.use((req, res, next) => {
//   res.status(200).send('what up properties_users ninja')
// })

module.exports = router
