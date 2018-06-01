// Or, if you don't want/need a background service you can just run:
//   pg_ctl -D /usr/local/var/postgres start

const sequelize = require('sequelize');
const db = new sequelize('sequoiaproductdescription', 'kyle', 'kyle', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('successfully connected to the database')
  })
  .catch(err => {
    console.log('oh no, the db is busted ', err)
  })

const MasterProductList = sequelize.define('masterproductlist', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
})

const ProductDescription = sequelize.define('productdescription', {
  ProductTitle: Sequelize.STRING,
  Manufacturer: Sequelize.STRING,
  ListPrice: Sequelize.INTEGER,
  OurPrice: Sequelize.INTEGER,
  StockStatus: Sequelize.BOOLEAN,
  SoldBy: Sequelize.STRING,
  Description: Sequelize.STRING,
  Category: Sequelize.STRING
})

db.sync()

module.exports.db = db