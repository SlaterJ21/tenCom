const express = require('../node_modules/express')
const router = express.Router()

router.use(express.static('pmPortfolio'))

module.exports = router
