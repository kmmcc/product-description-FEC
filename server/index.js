const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const axios = require('axios')

const db = require('../database')

const app = express()
const PORT = 2112

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, function(err, success) {
  if(err) {
    console.log('Express server connection error!')
  } else {
    console.log('Listening on PORT: ', PORT)
  }
})

app.get('/api/description/name/:product', function(req, res) {
  db.ProductDescription.findOne({where: {ProductTitle: req.params.product}})
    .then(response => {
      res.send(response)
    })
    .catch(err => console.log('err in server name get', err))
})

app.get('/api/description/id/:id', function(req, res) {
  db.ProductDescription.findOne({where: {id: req.params.id}})
    .then(response => {
      res.send(response)
    })
    .catch(err => console.log('err in server ID get', err))
})

app.put('/api/description/:product', function(req, res) {
  db.ProductDescription.update(
    {
      ProductTitle: req.body.producttitle,
      OurPrice: req.body.ourprice,
      StockStatus: req.body.stockstatus,
      Description: req.body.description
    },
    {
      where: { ProductTitle: req.params.product}
    }
  )
})