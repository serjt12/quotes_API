
import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import './Quote.css';

const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
const config = {
  headers: {
    'X-Mashape-Key': 'FnkpO1gyThmshwuJmqvtfg7Si409p1G2e9ujsnc5e22XgPKuRZ',
    'Accept': 'application/json'
  }

};


class Quote extends Component {
  
  

  static propTypes = {
    newQuote: PropTypes.string,
    newAuthor: PropTypes.string,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props)

    this.state ={
      newQuote: '',
      newAuthor: '',
      category: '',
      

    };
    this.onClick = this.onClick.bind(this);

  }

  

  
  componentDidMount() {
    this.getData();
      
    }
  
    getData = () =>{
      axios.get(url, config)
        .then(res => {
          console.log(res.data),
          this.setState({
            
            newQuote: res.data.quote,
            newAuthor: res.data.author,
            category: res.data.category,
            
          })

        })


        .catch((error) => {
          console.log("error", error)
        })
    }
    

  onClick(e) {
   this.getData();
  }
  

  render() {
    const { newQuote, newAuthor, category} = this.state;
  
    return (
      <div className="box">
        <h1 >{category}</h1> 
        <h2 className="quote">"{newQuote}"</h2>
        <h3 >-{newAuthor}</h3>        
               
       
     
      
        <button
          type="button"
          className="button"
          onClick={this.onClick}
        >
          <span>Next Quote</span>
          </button>
        
      </div>
    )
  }
}

export default Quote;
