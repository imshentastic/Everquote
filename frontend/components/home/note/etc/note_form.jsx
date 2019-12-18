// import React from "react";
// import ReactQuill from "react-quill";
// // import merge from "lodash/merge";
// import Modal from "react-modal";
// import CreateNotebookFormContainer from "../notebook/create_notebook_form_container";
// // import NoteFormTags from "../tags/note_form_tags";
// import NoteDetailContainer from "./note_detail_container";
// import { emptyNote } from "../../../util/entities_util";

// const modalStyles = {
//   content: {
//     top: "0px",
//     left: "0px",
//     height: "100%",
//     width: "100%",
//     overflow: "hidden"
//   }
// };

// class NoteForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       note: this.props.note,
//       expanded: this.props.isUpdateForm ? false : true
//     };

//     // action handlers
//     this.triggerNoteAction = this.triggerNoteAction.bind(this);
//     // this.addTagDispatch = this.addTagDispatch.bind(this);
//     // this.removeTagDispatch = this.removeTagDispatch.bind(this);
//     // UI
//     this.expandNote = this.expandNote.bind(this);
//     this.collapseNote = this.collapseNote.bind(this);
//     // Click/onchange handlers
//     this.handleBodyChange = this.handleBodyChange.bind(this);
//     this.handleTitleChange = this.handleTitleChange.bind(this);
//     this.handleCancelClick = this.handleCancelClick.bind(this);
//     this.handleDoneClick = this.handleDoneClick.bind(this);
//     this.handleSelectNotebookClick = this.handleSelectNotebookClick.bind(this);
//     this.handleDeleteNote = this.handleDeleteNote.bind(this);

//     // modal
//     this.openNoteDetailModal = this.openNoteDetailModal.bind(this);
//     this.closeNoteDetailModal = this.closeNoteDetailModal.bind(this);
//     this.openNoteCreateModal = this.openNoteCreateModal.bind(this);
//     this.closeNoteCreateModal = this.closeNoteCreateModal.bind(this);

//     // auto save
//     this.recentlyMountedNewNote = false;
//     this.autoSaveTimerId = null;
//     this.autoSaveInterval = 500;
//     this.startAutoSave = this.startAutoSave.bind(this);
//   }

//   componentWillMount() {
//     this.setState({
//       noteDetailModalIsOpen: false
//     });
//   }

//   componentDidMount() {
//     if (this.state.expanded) {
//       this.expandNote();
//     } else {
//       this.collapseNote();
//     }
//   }

//   componentWillReceiveProps(newProps) {
//     // if navigate to new note form always have it expanded
//     if (this.props.match.url !== newProps.match.url) {
//       this.recentlyMountedNewNote = true;
//       if (newProps.match.url.includes("/notes/new")) this.expandNote();
//     }

//     this.setState({
//       note: newProps.note
//     });
//   }

//   openNoteDetailModal() {
//     this.setState({ noteDetailModalIsOpen: true }); // re-enable after styling notedetail
//   }

//   closeNoteDetailModal() {
//     this.setState({ noteDetailModalIsOpen: false });
//   }

//   openNoteCreateModal() {
//     this.setState({ noteCreateModalIsOpen: true });
//   }

//   closeNoteCreateModal() {
//     this.setState({ noteCreateModalIsOpen: false });
//   }

// //   addTagDispatch(addTag) {
// //     let newNote = this.state.note;
// //     if (!newNote.tags.map(tag => tag.name).includes(addTag.name)) {
// //       if (this.state.note.id) {
// //         this.props.addTagToNote(this.state.note.id, addTag.name);
// //       } else {
// //         newNote.tags.push(addTag);
// //       }
// //     }
// //     this.setState({ note: newNote });
// //   }

// //   removeTagDispatch(removeTag) {
// //     let newNote = this.state.note;
// //     if (newNote.tags.map(tag => tag.name).includes(removeTag.name)) {
// //       if (removeTag.id) {
// //         this.props.removeTagFromNote(this.state.note.id, removeTag.name);
// //       } else {
// //         newNote.tags = this.state.note.tags.filter(
// //           tag => tag.name !== removeTag.name
// //         );
// //       }
// //       this.setState({ note: newNote });
// //     }
// //   }

//   noteContainerClickListener(e) {
//     const noteList = document.getElementsByClassName("notebook-list-wrap")[0];
//     if (
//       e.target.className !== "curr-notebook-title" &&
//       e.target.className !== "bnicon bn-notebook-small" &&
//       e.target.className !== "fa fa-angle-down"
//     ) {
//       if (noteList) {
//         noteList.classList.add("hidden");
//       }
//     } else if (
//       e.target.className === "curr-notebook-title" ||
//       e.target.className !== "bnicon bn-notebook-small" ||
//       e.target.className !== "fa fa-angle-down"
//     ) {
//       if (noteList) {
//         if (noteList.classList.value.includes("hidden")) {
//           noteList.classList.remove("hidden");
//         } else {
//           noteList.classList.add("hidden");
//         }
//       }
//     }
//   }

//   handleDeleteNote(e) {
//     this.props.deleteNote(this.state.note.id);
//     const params = this.props.match.params;
//     let newUrl = this.props.match.path.replace("/:noteId", "");
//     Object.keys(params).forEach(paramKey => {
//       newUrl = newUrl.replace(`:${paramKey}`, params[paramKey]);
//     });
//     this.props.history.push(newUrl);
//   }

//   handleBodyChange(value) {
//     const updatedNote = Object.assign(this.state.note, { body: value });
//     if (!this.recentlyMountedNewNote) {
//       this.startAutoSave();
//       this.setState({ note: updatedNote });
//     } else this.recentlyMountedNewNote = false;
//   }

//   handleTitleChange(e) {
//     const updatedNote = Object.assign(this.state.note, {
//       heading: e.target.value
//     });
//     this.startAutoSave();
//     this.setState({ note: updatedNote });
//   }

//   handleDoneClick(e) {
//     const actionNote = this.formattedNoteForNoteAction(this.props.note);

//     if (this.props.isUpdateForm) {
//       this.props.noteAction(actionNote);
//       this.collapseNote();
//     } else {
//       this.props.noteAction(actionNote).then(
//         action =>
//           this.props.history.push(
//             `/notebooks/${actionNote.notebook_id}/notes/${action.note.id}`
//           ),
//         err => {
//           this.props.history.push("/notes");
//           this.setState({ note: Object.assign({}, emptyNote) });
//         }
//       );
//     }

//     this.collapseNote();
//   }

//   handleCancelClick(e) {
//     this.collapseNote();
//     if (this.props.prevUrl) {
//       this.props.history.goBack();
//     }
//   }

//   startAutoSave() {
//     if (this.props.isUpdateForm) {
//       clearTimeout(this.autoSaveTimerId);
//       this.autoSaveTimerId = setTimeout(
//         this.triggerNoteAction,
//         this.autoSaveInterval
//       );
//     }
//   }

//   triggerNoteAction() {
//     this.props.noteAction(this.formattedNoteForNoteAction(this.props.note));
//   }

//   formattedNoteForNoteAction(note) {
//     let formattedNote = {};
//     formattedNote.heading = note.heading;
//     formattedNote.body = note.body;
//     formattedNote.notebook_id = note.notebook.id;
//     // formattedNote.tags = note.tags ? note.tags : [];
//     if (note.id) {
//       formattedNote.id = note.id;
//     }
//     return formattedNote;
//   }

//   expandNote() {
//     this.setState({ expanded: true });

//     const sideBar = document.getElementsByClassName("sidebar")[0];
//     const notesIndexContainer = document.getElementsByClassName(
//       "note-index-container"
//     )[0];
//     const noteShowContainer = document.getElementsByClassName(
//       "note-content"
//     )[0];
//     const noteAssocsContainer = document.getElementsByClassName(
//       "note-assocs-container"
//     )[0];
//     const noteOptsContainer = document.getElementsByClassName(
//       "note-opts-wrap"
//     )[0];

//     // setTimeout(() => sideBar.classList.add("move-side-bar-left"), 200);
//     sideBar.classList.add("move-side-bar-left");
//     notesIndexContainer.classList.add("move-note-index-container-left");
//     noteShowContainer.classList.add("move-note-content-left");
//     if (noteOptsContainer) {
//       noteOptsContainer.classList.add("move-note-opts-wrap-left");
//     }

//     sideBar.classList.remove("move-side-bar-right");
//     notesIndexContainer.classList.remove("move-note-index-container-right");
//     noteShowContainer.classList.remove("move-note-content-right");
//     if (noteOptsContainer) {
//       noteOptsContainer.classList.remove("move-note-opts-wrap-right");
//     }
//   }

//   collapseNote() {
//     this.setState({ expanded: false });

//     const sideBar = document.getElementsByClassName("sidebar")[0];
//     const notesIndexContainer = document.getElementsByClassName(
//       "note-index-container"
//     )[0];
//     const noteShowContainer = document.getElementsByClassName(
//       "note-content"
//     )[0];
//     const noteOptsContainer = document.getElementsByClassName(
//       "note-opts-wrap"
//     )[0];

//     sideBar.classList.add("move-side-bar-right");
//     notesIndexContainer.classList.add("move-note-index-container-right");
//     noteShowContainer.classList.add("move-note-content-right");
//     if (noteOptsContainer) {
//       noteOptsContainer.classList.add("move-note-opts-wrap-right");
//     }

//     sideBar.classList.remove("move-side-bar-left");
//     notesIndexContainer.classList.remove("move-note-index-container-left");
//     noteShowContainer.classList.remove("move-note-content-left");
//     if (noteOptsContainer) {
//       noteOptsContainer.classList.remove("move-note-opts-wrap-left");
//     }
//   }

//   switchDoneCancelBtn() {
//     if (
//       !this.props.isUpdateForm &&
//       (this.state.note.heading.length === 0 ||
//         this.state.note.body.length === 0 ||
//         !this.state.note.notebook.id)
//     ) {
//       return (
//         <button
//           className="note-new-cancel-btn"
//           onClick={this.handleCancelClick}
//         >
//           Cancel
//         </button>
//       );
//     } else {
//       return (
//         <button className={`note-edit-done-btn`} onClick={this.handleDoneClick}>
//           Done
//         </button>
//       );
//     }
//   }

//   switchExpandCollapseBtn() {
//     if (this.state.expanded) {
//       return this.switchDoneCancelBtn();
//     } else {
//       return (
//         <button className="note-expand-btn" onClick={this.expandNote}>
//           <i className="fa fa-expand" aria-hidden="true" />
//         </button>
//       );
//     }
//   }

//   noteOpts() {
//     if (this.props.isUpdateForm) {
//       return (
//         <div className="note-opts-container">
//           <div className="note-opts-wrap">
//             <div className="note-info-wrap" onClick={this.openNoteDetailModal}>
//               <div className="note-info-btn">i</div>
//             </div>
//             <div className="note-delete-wrap" onClick={this.handleDeleteNote}>
//               <div className="note-delete-btn">
//                 <div className="bnicon bn-trash" />
//               </div>
//             </div>
//           </div>
//           <div className="note-expand-collapse-btn-container">
//             {this.switchExpandCollapseBtn()}
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="note-opts-container">
//           <div className="placeholder" />
//           <div className="note-expand-collapse-btn-container">
//             {this.switchExpandCollapseBtn()}
//           </div>
//         </div>
//       );
//     }
//   }

//   noteAssocs() {
//     return (
//       <div className="note-assocs-container">
//         <div className="curr-notebook">
//           <img
//             className="bnicon bn-notebook-small"
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAAQ0lEQVR42mNgAIIjR478h9G48NGjRz8wwAAxGmBqqKOBAQ1QXwPt/UAbDUTgT8ga/hw6dEiUAQ8AqnmBzPlMkg2kAAAQSjr0OXc0oAAAAABJRU5ErkJggg=="
//             aria-hidden="true"
//           />
//           <div className="curr-notebook-title">
//             {this.state.note.notebook.id ? this.state.note.notebook.title : ""}
//           </div>
//           <i className="fa fa-angle-down" aria-hidden="true" />
//         </div>
//         <div className="notebook-list-wrap hidden">{this.notebookList()}</div>
//         {/* {
//           <NoteFormTags
//             noteId={this.state.note.id}
//             noteTags={this.state.note.tags}
//             addTagDispatch={this.addTagDispatch}
//             removeTagDispatch={this.removeTagDispatch}
//             removeTagFromNote={this.props.removeTagFromNote}
//             isUpdateForm={this.props.isUpdateForm}
//           />
//         } */}
//       </div>
//     );
//   }

//   handleSelectNotebookClick(notebookId) {
//     const noteList = document.getElementsByClassName("notebook-list-wrap")[0];

//     const newNotebook = this.props.notebooks[notebookId];
//     const currNote = this.state.note;
//     currNote.notebook = newNotebook ? newNotebook : {};
//     this.setState({ note: currNote });
//     this.startAutoSave();
//   }

//   notebookList() {
//     return (
//       <div className="notebook-list">
//         <div
//           onClick={this.openNoteCreateModal}
//           className="create-new-notebook notebook-title-container"
//         >
//           <div className="notebook-title-wrapper">
//             <div className="notebook-title">
//               <div>Create new notebook</div>
//             </div>
//           </div>
//         </div>
//         {Object.values(this.props.notebooks).map(notebook => (
//           <div
//             key={notebook.id}
//             onClick={() => this.handleSelectNotebookClick(notebook.id)}
//             className={`notebook-title-container${this.state.note.notebook.id
//               ? this.state.note.notebook.id === notebook.id ? " active" : ""
//               : ""}`}
//           >
//             <div className="notebook-title-wrapper">
//               <div className="notebook-title">{notebook.title}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   noteDetail() {
//     return (
//       <Modal
//         isOpen={this.state.noteDetailModalIsOpen}
//         onAfterOpen={this.afterOpenNoteDetailModal}
//         onRequestClose={this.closeNoteDetailModal}
//         style={modalStyles}
//         contentLabel="Note Detail Modal"
//       >
//         <NoteDetailContainer closeModal={this.closeNoteDetailModal} />
//       </Modal>
//     );
//   }

//   notebookCreate() {
//     return (
//       <Modal
//         isOpen={this.state.noteCreateModalIsOpen}
//         onAfterOpen={this.afterOpenNoteCreateModal}
//         onRequestClose={this.closeNoteCreateModal}
//         style={modalStyles}
//         contentLabel="Note Create Modal"
//       >
//         <NotebookCreateContainer closeModal={this.closeNoteCreateModal} />
//       </Modal>
//     );
//   }

//   render() {
//     return (
//       <div className="note-container" onClick={this.noteContainerClickListener}>
//         <div className="note-opts-assocs-wrapper">{this.noteOpts()}</div>
//         <div className="note-content-container">
//           <div className="note-content">
//             {this.noteAssocs()}
//             <input
//               id="note-title"
//               className="note-title"
//               value={this.state.note.heading}
//               onKeyDown={e => {
//                 let code = e.keyCode || e.which;
//                 if (code === 9 || code === 13) {
//                   e.preventDefault();
//                   $(".ql-editor").focus();
//                 }
//               }}
//               onChange={this.handleTitleChange}
//               placeholder="Title your note"
//               onClick={this.hideToolbar}
//             />
//             <ReactQuill
//               modules={modules}
//               value={this.state.note.body}
//               onChange={this.handleBodyChange}
//               onClick={this.showToolbar}
//               placeholder="Drag files here or just start typing..."
//             />
//           </div>
//         </div>
//         {this.noteDetail()}
//         {this.notebookCreate()}
//       </div>
//     );
//   }
// }

// const toolBarOpts = [
//   [{ font: [] }],
//   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//   ["bold", "italic", "underline", "strike"], // toggled buttons
//   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//   ["blockquote", "code-block"],
//   [{ align: [] }],
//   [{ list: "ordered" }, { list: "bullet" }],
//   [{ script: "sub" }, { script: "super" }], // superscript/subscript
//   ["clean"], // remove formatting button

//   ["link", "image", "video", "formula"] // misc
// ];

// const modules = {
//   toolbar: toolBarOpts
// };

// export default NoteForm;
