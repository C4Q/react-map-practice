import React from 'react'
import $ from 'jQuery'

const Countries = React.createClass({
  getInitialState(){
    return {
      countries: null,
    };
  },

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'https://restcountries.eu/rest/v1/all',
      success:(arrayOfCountryObjects) => {
        console.log("THE DATA WE'RE GETTING BACK FROM COUNTRIES API ======>", arrayOfCountryObjects)
        this.setState({
          countries: arrayOfCountryObjects
        });
      }
  })
},

render(){
  console.log("YOUR STATE IS: ",this.state)
  if(this.state.countries){
    return (
      <div>
        {
          this.state.countries.map(function(country, idx){
            console.log("IT'S COUNTRIES inside of your map ==>", country)
            return <li key={idx}><h2>{country.name}</h2><h3>capital: {country.capital}</h3><h3>population: {country.population}</h3></li>
          })
        }
      </div>
    )
    }else{
      return <div><h1>Loading...</h1></div>
    }
  }
})

export default Countries;
