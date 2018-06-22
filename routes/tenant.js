const express = require('../node_modules/express')
const router = express.Router()

router.use(express.static('public'))

module.exports = router
