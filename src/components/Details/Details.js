import React, { Component } from 'react';
import {connect} from 'react-redux';



class Details extends Component {

  // When back button is clicked, navigates back to home page  
  handleBackClick = (event) => {
      console.log('clicked back button')
      this.props.history.push('/')
  }
  
  // When edit button is clicked, navigates to edit page
  handleEditClick = (event) => {
      console.log('clicked edit button')
      this.props.history.push('/edit')
  }

  render() {
    return (
      
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
        <br/>
        <button onClick={this.handleBackClick}>Back to Movie List</button>
        <button onClick={this.handleEditClick}>Edit Movie Details</button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Details);