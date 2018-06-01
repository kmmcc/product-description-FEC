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
  
})

db.sync()

module.exports.db = db