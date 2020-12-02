const router = require('express').Router()

router.get('/', (req, res) => res.redirect('/api/users'))
router.use('/api', require('./userController.js'))

module.exports = router
