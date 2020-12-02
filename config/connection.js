const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://root:rootroot@localhost/users_db')

module.exports = connection
