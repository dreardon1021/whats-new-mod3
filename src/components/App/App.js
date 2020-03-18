import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment.js';
import health from '../../data/health.js';
import science from '../../data/science.js';
import technology from '../../data/technology.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';

import './App.css';

const INITIAL_STATE = {
  news: {
    local: local,
    entertainment: entertainment,
    health: health,
    science: science,
    technology: technology
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        technology: technology
      }
    }
  }

  updateState = (event) => {
    this.setState({news: {category: INITIAL_STATE.news[event.target.id]}})
  }

  render () {
    return (
      <div className="app">
        <Form />
        <Menu updateState={this.updateState}/>
        <NewsContainer articles={this.state.news.local || this.state.news.category}/>
      </div>
    );
  }
}

export default App;
