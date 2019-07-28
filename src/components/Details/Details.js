import React, { Component } from 'react';
import {connect} from 'react-redux';



class Details extends Component {


  componentDidMount(){
    console.log('details is mounted')
  }

  handleClick = (movie) => {
    console.log(movie.id);
    this.props.history.push('/details');
  }

  // Renders the entire app on the DOM
  render() {
    return (

        // {this.props.reduxStore.movies.map(movie => {
        //   return <li key={movie.id} onClick={() => this.handleClick(movie)}>
        // <img src={movie.poster}/>
      
      <div className="App">
        <center>
        <h2>{this.props.reduxStore.movieDetails.title}</h2>

        <img src={this.props.reduxStore.movieDetails.poster}/>
        <div>
            <h4>Genres:</h4>
            {this.props.reduxStore.genres.map(genre => {
            return <span key={genre.id}>
            {genre.name},
            </span>
            })}
        </div>
        <br/>
        {this.props.reduxStore.movieDetails.description}
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Details);