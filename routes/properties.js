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
      "postalcode": req.body.postalcode
    })
    .returning('id')
    .then((id) => {
      knex('users')
        .where('email', req.body.email)
        .then((result) => {
          if (result.length !== 1) {
            res.status(400).json({ errorMessage: 'Bad email. Flourine, Uranimum, Carbon, Potassium.' })
          } else {
            return result[0].id
          }
        })
        .then((tenant_id) => {
          return knex
            .into('properties_users')
            .insert({
              "property_id": id[0],
              "tenant_id": tenant_id,
              "manager_id": req.body.manager_id,
              "contract_id": req.body.contract_id
            })
            .returning('*')
            .then((data) => {
              return knex('users')
              .where('id', data[0].manager_id)
              .then((result) =>{
                if(!result[0].ispm){
                  res.redirect(`/tenantPortfolio.html`)
                } else {
                  res.redirect(`/pmPortfolio.html`)
                }
              })
            })
        })
    })
    .catch((err) => {
      next(err)
    })
})

// write a route for getting one of the properties, respond with the parameter id and make sure the id is converted to a string before sending
router.get('/', (req,res,next) => {
  knex('properties')
    .then((rows) => {
      res.send(rows)
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
