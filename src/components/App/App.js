import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment.js'
import health from '../../data/health.js'
import science from '../../data/science.js'
import technology from '../../data/technology.js'
import Menu from '../Menu/Menu.js'
import NewsContainer from '../NewsContainer/NewsContainer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [local,
      entertainment,
      health,
      science,
      technology]
    }
  }

  updateState = (event) => {
    if(event.target.id === 'local') {
      this.setState({news: [local]})
    } else if (event.target.id === 'entertainment') {
      this.setState({news: [entertainment]})
    } else if (event.target.id === 'health') {
      this.setState({news: [health]})
    } else if (event.target.id === 'science') {
      this.setState({news: [science]})
    } else if (event.target.id === 'technology') {
      this.setState({news: [technology]})
    }
  }

  render () {
    return (
      <div className="app">
        <Menu updateState={this.updateState}/>
        <NewsContainer articles={this.state.news}/>
      </div>
    );
  }
}

export default App;
