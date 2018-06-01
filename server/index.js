const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const axios = require('axios')

//require db

const server = express()
const PORT = 3000

server.use(express.static(path.join(__dirname, '../client/dist')))
server.use(bodyParser.json)
server.use(bodyParser.urlencoded({extended: true}))
server.use(helmet())

server.listen(PORT, function(err, success) {
  if(err) {
    console.log('Express server connection error!')
  } else {
    console.log('Listening on PORT: ', PORT)
  }
})
