import React, { Component } from 'react';
import {connect} from 'react-redux';



class Details extends Component {

  componentDidMount(){
    console.log('details is mounted')
  }

  handleBackClick = (event) => {
      console.log('clicked back button')
      this.props.history.push('/')
  }

  handleEditClick = (event) => {
      console.log('clicked edit button')
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
        <button onClick={this.handleEditClick}>Edit Movie Details</button>
        <button onClick={this.handleBackClick}>Back to Movie List</button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Details);