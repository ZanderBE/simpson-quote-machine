import React from 'react';
import './App.css';
import Quotebox from './Quotebox.js';
import Author from './Author.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      CORSurl: 'https://cors-anywhere.herokuapp.com/',
      APIurl: 'https://thesimpsonsquoteapi.glitch.me/quotes'
    };
  }
  componentDidMount() {
     this.fetchData();
  }

  fetchData() {
    fetch(this.state.CORSurl + this.state.APIurl, {
        headers: {
          'Pragma': 'no-store',
          'Cache-Control': 'no-store'
        }
      })
      .then(res => res.json())
      .then((data) => {
        this.setState({ quotes: data })
      })
      .catch(console.log)
  }
  
  handleClick = () => {
    this.fetchData();
  }
  
  render() {
    return (
      
      <div id="quote-box">
          <h1>Simpson's Quote Machine</h1>
          {this.state.quotes.map(quote => (
            <div className="quote-container" key={quote.toString()} id={quote.ID}>
              <Quotebox 
                quotetext={quote.quote.replace(/(<([^>]+)>)/ig, "")} />
              <Author 
                author={quote.character}
              />
              <button id="new-quote" onClick={this.handleClick}>New Quote</button>
              <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.quote} -${quote.character}`}>Tweet</a>
            </div>
          ))}
      </div>
    )
  }
}

export default App;

