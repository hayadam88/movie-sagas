import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Details from '../Details/Details';
import Home from '../Home/Home';

class App extends Component {

  handleClick = (movie) => {
    console.log(movie.id);
    this.props.history.push('/details');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
        
        
      </div>
      
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
