import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {


  componentDidMount(){
    Axios.get('/movies')
      .then(response => {
        console.log(response.data);
        this.props.dispatch({type: 'SET_MOVIES', payload: response.data})
      });
  }

  handleClick = () => {
    console.log('clicked movie');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Gallery</h1>
        <ul>
        {this.props.reduxStore.movies.map(movie => {
          return <li key={movie.id} onClick={this.handleClick}>{movie.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
