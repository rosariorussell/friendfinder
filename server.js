const express = require('express')
var app = express()
const bodyParser = require('body-parser')
const path = require('path')

var PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './app/public')))

// routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, function () {
  console.log('listening on ' + PORT)
})
