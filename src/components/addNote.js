import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class AddNote extends React.Component {
  addNote(text) {
    if( this.text.value !== '') {
      this.props.addNote(this.text.value);
      this.text.value = '';
    }
  }
  render() {

    return(
      <div style={{margin: '18pt 0'}}>
        <textarea className="form-control" ref={(input) => this.text = input}></textarea>
        <button className="btn btn-success" onClick={() => this.addNote(this.text.value)}>
          Add note
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {addNote: (text) => dispatch(addNote(text))};
};

export default connect(null, mapDispatchToProps)(AddNote);
