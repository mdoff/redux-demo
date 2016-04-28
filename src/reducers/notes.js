import * as actions from '../actions';


export default function notes(state = [], action) {
  switch(action.type) {
    case actions.ADD_NOTE: {
      return [...state, {text: action.text, id: action.id, edit: false}];
    }
    case actions.REMOVE_NOTE: {
      const removeIndex = state.findIndex((item) => item.id === action.id);
      return [
        ...state.slice(0,removeIndex),
        ...state.slice(removeIndex+1)
      ];
    }
    case actions.SAVE_NOTE: {
      const noteIndex = state.findIndex((item) => item.id === action.id);
      return [
        ...state.slice(0,noteIndex),
        {text: action.text, id: action.id, edit: false},
        ...state.slice(noteIndex+1)
      ];
    }
    case actions.EDIT_NOTE: {
      const noteIndex = state.findIndex((item) => item.id === action.id);
      const note = state[noteIndex];
      return [
        ...state.slice(0,noteIndex),
        {...note, edit: true},
        ...state.slice(noteIndex+1)
      ];
    }
    default: {
      return state;
    }
  }
}
