import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/edit" component={Edit} />
        
        
      </div>
      
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
