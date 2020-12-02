const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// app.get('/', (req, res) => {
//   res.render('index', { name: 'John Doe', age: 47 })
// })

// app.get('/jane', (req, res) => {
//   res.render('index', { name: 'Jane Doe', age: 46 })
// })

app.use(require('./controllers'))

app.listen(process.env.PORT || 3000)
