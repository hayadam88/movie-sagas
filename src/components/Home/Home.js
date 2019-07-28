import React, { Component } from 'react';
import {connect} from 'react-redux';


class Home extends Component {


  componentDidMount(){
    this.props.dispatch({type: 'FETCH_MOVIES'});
  }

  handleClick = (movie) => {
    console.log(movie.id);
    this.props.history.push('/details');
    this.props.dispatch({type: 'FETCH_MOVIE_DETAILS', payload: movie})
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Gallery</h1>
        <ul>
        {this.props.reduxStore.movies.map(movie => {
          return <li key={movie.id} onClick={() => this.handleClick(movie)}>
        <img src={movie.poster}/>
        <br/>
        {movie.title} 
        <br/>
        {movie.description}</li>
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