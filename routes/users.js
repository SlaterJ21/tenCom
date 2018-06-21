const express = require('../node_modules/express')
const router = express.Router()
const knex = require('../knex')
const { hashSync } = require('bcryptjs')

// write a route for creating a users, return the body of the request that was sent to your route
router.post('/', (req,res,next) => {
  knex('users')
    .where('email', req.body.email)
    .then((result) => {
      if (result.length !== 0) {
        res.status(400).json({ errorMessage: 'Existing Email' })
      }
      else {
        let hashWord = hashSync(req.body.password)
        knex('users')
          .insert({
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "phone_number": req.body.phone_number,
            "email": req.body.email,
            "password": hashWord,
            "ispm": req.body.ispm
          })
          .returning('*')
          .then((data) => {
            res.json(data[0])
          })
          .catch((err) => {
            next(err)
          })
      }

    })

  // res.status(200).send(req.body)
})

// write a route for getting all of the users, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/', (req,res,next) => {
  knex('users')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
  // res.status(200).send(req.params.id)
})

// write a route for getting one of the users, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/:id', (req,res,next) => {
  knex('users')
  .where('id',req.params.id)
  .then((rows) => {
    res.json(rows)
  })
  .catch((err) => {
    next(err)
  })
})



// write a patch route for editing a users, return an object with the id and the change that was requested
router.put('/:id', (req,res,next) => {
  knex('users')
    .where('id', req.params.id)
    .then((data) => {
      knex('users')
      .where('id', req.params.id)
      .limit(1)
      .update({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "phone_number": req.body.phone_number,
        "email": req.body.email,
        "password": req.body.password,
        "ispm": req.body.ispm
      })
      .returning('*')
      .then((data) => {
        res.json(data[0])
      })
    })
    .catch((err) => {
      next(err)
    })
})

// write a route for deleting one of the users, respond with the parameter id
router.delete('/:id', (req,res,next) => {
  knex('users')
  .where('id', req.params.id)
  .first()
  .then((row) => {
    if(!row) return next()
    knex('users')
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
//   res.status(200).send('what up users ninja')
// })

module.exports = router
