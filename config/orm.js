const connection = require('./connection.js')

const orm = {
  getAll (table, cb) {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  create (table, data, cb) {
    connection.query(`INSERT INTO ${table} SET ?`, data, err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  update (table, data, query, cb) {
    connection.query(`UPDATE ${table} SET ? WHERE ?`, [data, query], err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  delete (table, query, cb) {
    connection.query(`DELETE FROM ${table} WHERE ?`, query, err => {
      if (err) { console.log(err) }
      cb()
    })
  }
}

module.exports = orm
