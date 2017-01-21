const express = require('express')
const app = express()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static('public'))
app.listen(8080, () => console.log('app listening on :8080, hit http://localhost:8080/response.fjson'))
