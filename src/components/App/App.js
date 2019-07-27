import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

  state = {
    movieList: [],
  }

  componentDidMount(){
    console.log(this.state.movieList);
    Axios.get('/movies')
      .then(response => {
        console.log(response.data);
        this.setState({
          movieList: response.data,
        });
      });
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Gallery</h1>
        <h2>this.state</h2>
        <pre>
          {JSON.stringify(this.state.movieList)}
        </pre>
        <h2>this.props</h2>
         <pre>
          {JSON.stringify(this.props.reduxStore.movies)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
