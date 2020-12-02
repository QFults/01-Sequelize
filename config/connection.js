const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/users_db')

module.exports = connection
