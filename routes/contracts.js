const express = require('../node_modules/express')
const router = express.Router()
const knex = require('../knex')

// write a route for creating a contracts, return the body of the request that was sent to your route
router.post('/', (req,res,next) => {
  knex('contracts')
    .insert({
      "rent": req.body.rent,
      "status": req.body.status,
      "contract": req.body.contract
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
})

// write a route for getting one of the contracts, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/', (req,res,next) => {
  knex('contracts')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})

// write a route for getting one of the contracts, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/:id', (req,res,next) => {
  knex('contracts')
  .where('id',req.params.id)
  .then((rows) => {
    res.json(rows[0].link)
  })
  .catch((err) => {
    next(err)
  })
})


module.exports = router
