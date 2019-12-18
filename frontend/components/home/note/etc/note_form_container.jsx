// import { connect } from "react-redux";
// import NoteForm from "./note_form";
// import { withRouter } from "react-router";
// import {
//   fetchNote,
//   updateNote,
//   createNote,
//   resetCurrNote,
//   deleteNote
// } from "../../../actions/note_actions";
// import { fetchNotebooks } from "../../../actions/notebook_actions";
// // import { removeTagFromNote, addTagToNote } from "../../actions/tag_actions";

// const mapStateToProps = (state, ownProps) => {
//   return {
//     notebooks: state.entities.notebooks.all,
//     isUpdateForm: ownProps.match.url.includes("notes/new") ? false : true,
//     autoSave: ownProps.match.url.includes("notes/new") ? false : true
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const noteAction = ownProps.match.url.includes("notes/new")
//     ? createNote
//     : updateNote;
//   return {
//     deleteNote: id => dispatch(deleteNote(id)),
//     fetchNote: id => dispatch(fetchNote(id)),
//     noteAction: note => dispatch(noteAction(note)),
//     fetchNotebooks: () => dispatch(fetchNotebooks()),
//     // addTagToNote: (noteId, tagName) => dispatch(addTagToNote(noteId, tagName)),
//     // removeTagFromNote: (noteId, tagName) =>
//     //   dispatch(removeTagFromNote(noteId, tagName)),
//     resetCurrNote: () => dispatch(resetCurrNote())
//   };
// };

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(NoteForm)
// );
