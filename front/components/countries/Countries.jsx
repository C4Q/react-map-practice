import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jQuery'

const Countries = React.createClass({
  getInitialState(){
    return({
      country: '',
      capital: '',
      population: '',
    })
  },

  componentDidMount: function(){
    var that = this
    $.ajax({
      type: 'GET',
      url: 'https://restcountries.eu/rest/v1/all',
      success: function(data){
        that.setState({
        countryName: this.state.name,
        capitalCity: this.state.capital,
        population: this.state.population,
      })
    }
  })
},

render: function(){
  return (
    <div>
      <h1>{this.state.country.name}</h1>
      <h1>{this.state.capital.capital}</h1>
      <h1>{this.state.population.population}</h1>
    </div>
    )
  }
})

export default Countries;
