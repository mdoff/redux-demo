
export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SAVE_NOTE = 'SAVE_NOTE';

let noteCounter = 0;

export function addNote (text) {
  return {
    type: ADD_NOTE,
    id: noteCounter++,
    text
  };
}

export function removeNote (id) {
  return {
    type: REMOVE_NOTE,
    id
  };
}

export function editNote(id) {
  return {
    type: EDIT_NOTE,
    id
  };
}

export function saveNote(id, text) {
  return {
    type: SAVE_NOTE,
    id,
    text
  };
}
