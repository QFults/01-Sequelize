const router = require('express').Router()

router.use('/api', require('./userController.js'))

module.exports = router
