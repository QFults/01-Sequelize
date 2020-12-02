const router = require('express').Router()
const orm = require('../config/orm.js')

router.get('/users', (req, res) => {
  orm.getAll('users', users => res.json(users))
})

router.post('/users', (req, res) => {
  orm.create('users', req.body, () => res.sendStatus(200))
})

router.put('/users/:id', (req, res) => {
  orm.update('users', req.body, { id: req.params.id }, () => res.sendStatus(200))
})

router.delete('/users/:id', (req, res) => {
  orm.delete('users', { id: req.params.id }, () => res.sendStatus(200))
})

module.exports = router
