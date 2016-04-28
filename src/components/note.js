import React from 'react';
import { connect } from 'react-redux';
import { editNote, saveNote, removeNote } from '../actions';


const ShowNote = ({text, edit}) => (
      <p onClick={() => edit()} style={{wordWrap: 'break-word', cursor: 'pointer'}}>
        {text}
      </p>
);

class EditNote extends React.Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return (
      <div >
        <textarea className="form-control" ref={(input) => this.input = input}
        onBlur={() => this.props.save(this.input.value)} defaultValue={this.props.text}></textarea>
      </div>
    );
  }
}

const Note = ({...props, id, text, edit, editNote, saveNote, removeNote}) => {

  const note = edit ?
  <EditNote text={text} save={(text) => saveNote(id, text)} /> :
  <ShowNote text={text} edit={() => editNote(id)}/>;

  return (
    <div className="panel panel-primary">
      <div class="panel-body" style={{margin: '8pt'}}>
        <button className="close">
          <span aria-hidden="true" onClick={() => removeNote(id)}>&times;</span>
        </button>
        <div style={{maxWidth: 'calc(100% - 13px)'}}>
          {note}
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id) => dispatch(editNote(id)),
    removeNote: (id) => dispatch(removeNote(id)),
    saveNote: (id, text) => dispatch(saveNote(id, text))
  };
};

export default connect(null, mapDispatchToProps)(Note);
