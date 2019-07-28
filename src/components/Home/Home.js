import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';


class Home extends Component {


  componentDidMount(){
    this.props.dispatch({type: 'FETCH_MOVIES'});
    Axios.get('/movies')
      .then(response => {
        console.log(response.data);
        this.props.dispatch({type: 'SET_MOVIES', payload: response.data})
      });
  }

  handleClick = (movie) => {
    console.log(movie.id);
    this.props.history.push('/details');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Gallery</h1>
        <ul>
        {this.props.reduxStore.movies.map(movie => {
          return <li key={movie.id} onClick={() => this.handleClick(movie)}>{movie.title}</li>
        })}
        </ul>
    </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Home);