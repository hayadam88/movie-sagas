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
      
      <div className="App">
        <center>
        <h2>{this.props.reduxStore.movieDetails.title}</h2>
        <img src={this.props.reduxStore.movieDetails.poster}/>
        <br/>
        {this.props.reduxStore.movieDetails.description}
        
        {JSON.stringify(this.props.reduxStore.movieDetails)}
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Details);