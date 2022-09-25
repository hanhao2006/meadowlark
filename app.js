const express = require('express')
const app = express()

// setting view engine of hadnlebars
const hadnlebars = require('express-handlebars').create({
  defaultLayout: 'main',
})
app.engine('handlebars', hadnlebars.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
// set port
app.set('port', process.env.PORT || 3000)

// home page
app.get('/', function (req, res) {
  res.render('home')
})

// about page
app.get('about', function (req, res) {
  res.render('about')
})

// must be below in the process file
// set 404 page
app.use(function (req, res) {
  res.status(404)
  res.render('404')
})

// set 500 page
app.use(function (req, res) {
  console.error(err.stack)
  res.status(500)
  res.render('500')
})

// home page
app.get('/', function (req, res) {
  res.type('text/plain')
  res.send('Hello world')
})

app.listen(app.get('port'), function () {
  console.log(
    'Express started on ' + app.get('port') + ' : press Ctrc + C to terminate--'
  )
})
