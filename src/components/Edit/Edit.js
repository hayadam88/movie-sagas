import React, { Component } from 'react';
import {connect} from 'react-redux';



class Edit extends Component {

  handleCancel = (event) => {
      console.log('clicked cancel button')
      this.props.history.push('/details')
  }

  handleSave = (event) => {
      console.log('clicked save button')
  }

  render() {
    return (
      
      <div className="App">
        <center>
        <h2>Edit</h2>
        <input type="text" placeholder="title"></input>
        <input type="text" placeholder="description"></input>
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