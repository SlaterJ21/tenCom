const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

require('dotenv').config()

router.get('/', function (req, res, next) {
  if ('jwt' in req.cookies) {
    const jwtCookie = req.cookies.jwt
    jwt.verify(jwtCookie, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.redirect('/login')
      }
      else {
        res.json({ title: decoded.username })
      }
    })
  }
  else {
    res.redirect('/login')
  }
  res.json({ title: 'Express' })
})

router.post('/logout', function (req, res, next) {
  res.clearCookie('jwt')
  res.redirect('/login')
})

module.exports = router
