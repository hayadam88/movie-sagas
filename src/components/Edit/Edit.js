import React, { Component } from 'react';
import {connect} from 'react-redux';



class Edit extends Component {

  handleCancel = (event) => {
      console.log('clicked cancel button')
      this.props.history.push('/details')
  }

  handleSave = (event) => {
      console.log('clicked save button')
      alert('Movie Details Succesfully Updated!')
      this.props.history.push('/details')
  }

  render() {
    return (
      
      <div className="App">
        <center>
        <h1>Edit Movie Details</h1>
        <h3>Edit Movie Title:</h3><input type="text" placeholder="title"></input>
        <h3>Edit Movie Description:</h3><input type="text" placeholder="description"
        style={{width: 400}}></input>
        <br/>
        <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.handleSave}>Save</button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Edit);