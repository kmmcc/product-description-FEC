const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const axios = require('axios')

require('../database')

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

//npm install

//nodemon X
//body-parser X
//express X
//helmet X
//axios X

//npm install sequelize
//npm install pg 

//react X
//react dom X
//babel core X
//babel-loader X
//babel-preset-env X
//babel-preset-react X

//webpack
//webpack cli

//git checkout branch
//commit everything
//send it up via branch