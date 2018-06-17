const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.get('/', function(req, res, next) {
  res.render('login', { errorMessage: '' })
})

router.post('/', function (req, res, next) {
  const username = req.body.username
  const password = req.body.password

  if (username && password) {
    knex('users')
      .where('username', username)
      .then((result) => {
        if (result.length !== 1) {
          res.status(400).render('login', { errorMessage: 'Bad username. Flourine, Uranimum, Carbon, Potassium.' })
        }
        else if (bcrypt.compareSync(password, result[0].password)) {
          const payload = {
            username: username,
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
    res.status(400).render('login', { errorMessage: 'Must have username and password' })
  }
})

module.exports = router
