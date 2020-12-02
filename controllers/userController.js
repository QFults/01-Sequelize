const router = require('express').Router()
const orm = require('../config/orm.js')
const user = require('../models/user.js')

router.get('/users', (req, res) => user.getAll(users => res.json(users)))

router.post('/users', (req, res) => user.create(req.body, () => res.sendStatus(200)))

router.put('/users/:id', (req, res) => user.update(req.body, req.params.id, () => res.sendStatus(200)))

router.delete('/users/:id', (req, res) => user.delete(req.params.id, () => res.sendStatus(200)))

module.exports = router