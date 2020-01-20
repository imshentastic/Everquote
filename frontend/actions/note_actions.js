import * as NoteApiUtil from '../util/note_api_util';
import {emptyNote} from "../util/entities_util";

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

import { receiveErrors, clearErrors } from './error_actions';

const receiveNotes = notes => {
    return {
        type: RECEIVE_NOTES,
        notes
    };
};

const receiveNote = note => {
  
    return {
        type: RECEIVE_NOTE,
        note
    };
};

const removeNote = noteId => {
    return {
        type: REMOVE_NOTE,
        noteId
    };
};

// const receiveNoteErrors = errors => {
//     return {
//       type: RECEIVE_NOTE_ERRORS,
//       errors
//     };
//   };

export const resetCurrNote = () => {
    return {
      type: RECEIVE_NOTE,
      note: emptyNote
    };
  };

export const fetchNotes = () => dispatch => {
    return NoteApiUtil.fetchNotes()
      .then(notes => {
        dispatch(receiveNotes(notes));
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };


export const fetchNote = noteId => dispatch => {
  
    return NoteApiUtil.fetchNote(noteId)
      .then(note => {
        dispatch(receiveNote(note));
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

export const createNote = note => dispatch => {
    return NoteApiUtil.createNote(note)
        .then( newNote => {
        dispatch(receiveNote(newNote));
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

  export const updateNote = note => dispatch => {
    
    return NoteApiUtil.updateNote(note)
    .then(updatedNote => {
      dispatch(receiveNote(updatedNote));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

  export const deleteNote = noteId => dispatch => {
    return NoteApiUtil.deleteNote(noteId)
    .then( () => {
      dispatch(removeNote(noteId));
      // dispatch(receiveNotes());
      dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

  export const addNote = note => dispatch => {
      return NoteApiUtil.addNote(note)
      .then(newNote => {
          dispatch(receiveNote(newNote));
          // dispatch(fetchNotebooks());
          // dispatch(receiveNotes());
          dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON)));
  };