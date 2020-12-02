const orm = require('../config/orm.js')

const user = {
  getAll (cb) {
    orm.getAll('users', users => cb(users))
  },
  create (user, cb) {
    orm.create('users', user, () => cb())
  },
  update (changes, id, cb) {
    orm.update('users', changes, { id }, () => cb())
  },
  delete (id, cb) {
    orm.delete('users', { id }, () => cb())
  }
}

module.exports = user
