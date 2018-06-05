// Or, if you don't want/need a background service you can just run:
//   pg_ctl -D /usr/local/var/postgres start

// roboto
// and lato for typefaces
// gotta scriptsrc for fonts in index
// put the repo into the organization

//create repo in org
//kyle module server
//instructions 2nd one, push from existing repo
//git remote add whatever name, eg slytherin
//git push -u slytherin master

const Sequelize = require('sequelize');
const db = new Sequelize('sequoiaproductdescription', 'kyle', 'kyle', {
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

const MasterProductList = db.define('masterproductlist', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING
}, {
  timestamps: false
})

const ProductDescription = db.define('productdescription', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  ProductTitle: Sequelize.STRING,
  Manufacturer: Sequelize.STRING,
  ListPrice: Sequelize.INTEGER,
  OurPrice: Sequelize.INTEGER,
  StockStatus: Sequelize.BOOLEAN,
  SoldBy: Sequelize.STRING,
  Description: Sequelize.TEXT,
  Category: Sequelize.STRING
}, {
  timestamps: false
})

db.sync()

module.exports.db = db
module.exports.MasterProductList = MasterProductList
module.exports.ProductDescription = ProductDescription