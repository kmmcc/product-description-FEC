import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'


// roboto
// and lato for typefaces
// gotta scriptsrc for fonts in index


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      producttitle: '',
      manufacturer: '',
      listprice: '',
      ourprice: '',
      stockstatus: '',
      soldby: '',
      description: '',
      category: ''
    }
    this.fetchProductDescription = this.fetchProductDescription.bind(this)
  }

  fetchProductDescription (product) {
    let context = this
    axios.get('/api/description/Regency%20Edition%20Leather%20Loveseat')
      .then(function (response) {
        console.log('RESPONSE FROM AXIOS GET FRONT END: ', response.data)
        let itemInfo = response.data
        context.setState({
          id: itemInfo.id,
          producttitle: itemInfo.ProductTitle,
          manufacturer: itemInfo.Manufacturer,
          listprice: itemInfo.ListPrice,
          ourprice: itemInfo.OurPrice,
          stockstatus: itemInfo.StockStatus,
          soldby: itemInfo.SoldBy,
          description: itemInfo.Description,
          category: itemInfo.Category
        })
      })
      .catch(function (error) {
        console.log('ERROR IN AXIOS GET FRONT END: ', error)
      })
  }

  render () {
    return (
      <div>

        <div> {this.state.manufacturer} </div>
        <div> {this.state.producttitle} </div>
        <div> {this.state.ourprice} </div>
        <div> {this.state.stockstatus} </div>
        <div> {this.state.soldby} </div>
        <div> {this.state.description} </div>
        
        <button onClick={ this.fetchProductDescription } > Clicky </button>

      </div>
    )
  }

}

//GET /api/description/:PRODUCTNAME
//add a PUT route - e.g. if sellers want to update descriptions, not necessary on front end tho

//onComponentDidMount - fetch data
//axios call to the server
//server connects to the DB


export default App