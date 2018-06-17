const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('../node_modules/bcrypt/bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()



router.get('/', function(req, res, next) {
  res.render('login', { errorMessage: '' })
})

router.post('/', function (req, res, next) {
  const email = req.body.email
  const password = req.body.password

  if (email && password) {
    knex('users')
      .where('email', email)
      .then((result) => {
        if (result.length !== 1) {
          res.status(400).render('login', { errorMessage: 'Bad email. Flourine, Uranimum, Carbon, Potassium.' })
        }
        else if (bcrypt.compareSync(password, result[0].password)) {
          const payload = {
            email: email,
            userId: result[0].id
          }
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' })
          res.cookie('jwt', token)
          res.redirect('/')
        }
        else {
          res.status(400).render('login', { errorMessage: 'Bad password' })
        }
      })
  }
  else {
    res.status(400).render('login', { errorMessage: 'Must have email and password' })
  }
})


module.exports = router
