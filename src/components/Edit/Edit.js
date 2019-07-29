import React, { Component } from 'react';
import {connect} from 'react-redux';



class Edit extends Component {

  // Sets local state to information we need for the PUT
    state = {
        id: this.props.reduxStore.movieDetails.id,
        name: '',
        description: '',
    }

    // This tells the page to navigate back to 'details' when the cancel button is clicked
    handleCancel = (event) => {
      console.log('clicked cancel button')
      this.props.history.push('/details')
    }

    // When save is clicked, it navigates back to the details page. It also gives an alert
    // that our movie details have been edited, and it also dispatches a payload to our
    // editMovie saga with our local state, which is then used to update movie detials
    handleSave = (event) => {
      console.log('clicked save button')
      alert('Movie Details Succesfully Updated!')
      this.props.dispatch({ type: 'EDIT_MOVIE', payload: this.state})
      this.props.history.push('/details')
    }

    // This sets our local state with the values inputed in the input field
    handleChangeFor = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        })
    }

    render() {
        return (
      
      <div className="App">
        <center>
        <h1>Edit Movie Details</h1>
        <h3>Edit Movie Title:</h3><input type="text" placeholder={this.props.reduxStore.movieDetails.title}
        onChange={(event) => this.handleChangeFor('name', event)}></input>
        <h3>Edit Movie Description:</h3><input type="text" placeholder={this.props.reduxStore.movieDetails.description}
        style={{width: 400}} onChange={(event) => this.handleChangeFor('description', event)}></input>
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