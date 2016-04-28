import { connect } from 'react-redux';
import React from 'react';
import Note from './note';
import { removeNote } from '../actions';


const NoteList = ({...props, notes, removeNote}) => {
  return (
    <div>
      {notes.map((note) => <Note key={'note-'+note.id} {...note} /> )}
    </div>
  );
};
const mapsStateToProps = (state) => {
  const notes = state.notes.sort((a, b) => (a.id > b.id) ? 0 : (a.id < b.id) ? 1 : -1);
  return {notes};
};

export default connect(mapsStateToProps, null)(NoteList);
