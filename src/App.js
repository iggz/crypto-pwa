// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './Today/Today'
// Import the History component to be used below
import History from './History/History'
// Import the Portfolio component to be used below
import Portfolio from './Portfolio/Portfolio'
import BarChart from './Portfolio/BarChart'

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 400,
    height: 500
  }

  render() {
    return (
      <>
        <div className="Portfolio">
          <Portfolio />
          <div>
            <BarChart data={ this.state.data } width={ this.state.width } height={ this.state.height } />
          </div>
        </div>
      </>
    );
  }
}

export default App;