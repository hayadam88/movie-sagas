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
        <h1>Movie Details</h1>  
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Details);