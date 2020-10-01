const express = require('express')
const tweet = require('./tweet')
const app = express()
 
app.get('/', function (req, res) {
  tweet()
  res.send('OK')
  res.statusCode = 200
})
 
app.listen(3000)
