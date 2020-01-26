import React from 'react';
import ReactQuill from 'react-quill';

class NoteShow extends React.Component {
//testing new!
  componentDidMount() {
    this.attachQuillRefs();
    this.quillRef.focus();
    // this.props.fetchNotebooks();
    // this.props.fetchNote(this.props.match.params.noteId);
    this.firstShow = true;
    
  }

  componentDidUpdate() {
    this.attachQuillRefs();
    this.firstShow = false;

  }

  componentWillUnmount() {
    clearTimeout(this.autosaveTimer);
  }


  componentWillReceiveProps(nextProps) {
    this.firstShow = true;
    this.attachQuillRefs();
    this.quillRef.focus();
    if (this.props !== nextProps) {
      clearTimeout(this.autosaveTimer);
    }
    if (nextProps.note !== undefined) {
      this.notebookId = nextProps.note.notebook_id;
      this.setState({
        id: nextProps.note.id,
        heading: nextProps.note.heading,
        body: nextProps.note.body,
        author_id: nextProps.note.author_id,
        notebook_id: Object.values(nextProps.notebooks)[0].id
      });
    }

  }

  constructor(props) {
    super(props);
    
    // this.props.fetchNote(this.props.match.params.noteId);
    
    // this.state = this.props.note;
    this.state = {
      // id: this.props.note.id,
        id: this.props.match.params.noteId,
        // heading: this.props.note.heading,
        // body: this.props.note.body,
        // notebook_id: this.notebookId
        heading: "",
        body: "",
        notebook_id: this.notebookId
        
    };

      
    if (this.props.note!== undefined) {
      this.notebookId = this.props.note.notebook_id;
    }
    
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateHeading = this.updateHeading.bind(this);

    this.autosave = this.autosave.bind(this);
    this.startAutosaveTimer = this.startAutosaveTimer.bind(this);
    this.autosaveTimer = null;
    this.autosaveInterval = 500;

    // this.handleCancel = this.handleCancel.bind(this);
    // this.handleUpdateNote = this.handleUpdateNote.bind(this);
    this.toggleNotebookDropDown = this.toggleNotebookDropDown.bind(this);
    this.handleAddNotebook = this.handleAddNotebook.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    
    this.props.fetchNotebooks();
    
   
    this.modules = {
      toolbar: [
        [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }, 'bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
            [{ 'align': [] }, {'list': 'bullet'}, {'list': 'ordered'}],
            ['link', 'image'],
            [{'indent': '+1'}, {'indent': '-1'}],
            [{ 'direction': 'rtl' }],   
            [{ 'script': 'sub'}, { 'script': 'super' }, 'clean']
            ]
    };
  }

  updateQuill(value) {
    if (this.quillRef) {
      this.setState({
        body: value
      });

      if (!this.firstShow) {
        this.startAutosaveTimer();
      }

    }
  }

  updateHeading(event) {
    this.setState({
      heading: event.currentTarget.value
    });
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  startAutosaveTimer(event) {
    clearTimeout(this.autosaveTimer);
    this.autosaveTimer = setTimeout(this.autosave, this.autosaveInterval);
  }

  autosave() {
    // this.props.updateNote(this.state)
    //   .then(() => {
    //     const lastSelected = document.querySelector(".selected-index-item");
    //     if (lastSelected) {
    //       lastSelected.classList.remove("selected-index-item");
    //     }
    //     // debugger
    //     // document.getElementById(`${this.props.note.id}`).classList.add("selected-index-item");
    //   });
    this.props.updateNote(this.state);
  }

  // handleCancel() {
  //   document.querySelector('.cancel').classList.add('hidden');
  //   this.props.closeModal();
  //   this.props.history.push('/api/notes');
  // }
  // handles creation of new note
  // handleUpdateNote() {
  //   this.props.updateNote(this.state)
  //     .then(() => this.props.history.push('/api/notes'))
  //     .then (()=>this.props.closeModal());
  //     // document.querySelector('.add-note').classList.add('hidden');
  // }
  
  toggleNotebookDropDown() {
    document.querySelector('.notebook-dropdown').classList.toggle('hidden');
  }

  handleAddNotebook() {
    this.props.history.push('/api/create-notebook');
    // this.props.openModal("createNotebook");
  }

  handleSelectNotebook(event) {
    if (this.notebookId !== event.target.id) {
      this.notebookId = event.target.id;
      this.setState({
        notebook_id: this.notebookId
      }, () => this.startAutosaveTimer());
      document.querySelector('.notebook-dropdown').classList.toggle('hidden');
    }
  }

  

  render() {
    const { notebooks, note, fetchNotebooks } = this.props;
    
    let notebookSelectItems, currentNotebook;

    if (Object.keys(notebooks).length > 0) {
      if (!this.notebookId) {

          this.notebookId = Object.keys(notebooks)[0];
      }

      // if (notebooks[this.notebookId] !== undefined) {
        currentNotebook = notebooks[this.notebookId].title;
      // } else {
      //   currentNotebook = null;
      // }
    
    notebookSelectItems = Object.keys(notebooks).map((notebookId, idx) =>
        <section
          key={ idx }
          className="notebook-select-item-container"
          onClick={ this.handleSelectNotebook }>
          <li
              key={ idx }
              className="notebook-select-item"
              id={ notebookId }>
              { notebooks[notebookId].title }
          </li>
        </section>
    );
    }
    
    return(
      <div className="note-container">
        <section className="note-select-options">
          <div
            className="small-notebook-icon"
            onClick={ this.toggleNotebookDropDown }></div>
          <ul className="notebook-dropdown hidden">
            <li
              className="select-add-notebook"
              onClick={ this.handleAddNotebook }>
              <div
                className="select-add-notebook-header"></div>
              Click to create new notebook!
            </li>
            { notebookSelectItems }
          </ul>
          <nav
            className="select-notebook"
            onClick={ this.toggleNotebookDropDown }>
            { currentNotebook }
          </nav>
          <div
            className="small-tag-icon"></div>
          
        </section>

        {/* <button
            className="cancel"
            onClick ={ this.handleCancel }>Cancel
        </button>
        <button
            className="add-note"
            onClick ={ this.handleUpdateNote }>Update Note
        </button> */}

        <input
          type="text"
          className="note-title"
          placeholder="Title your note"
          value={ this.state.heading }
          onChange={ this.updateHeading }
          onKeyUp={ this.startAutosaveTimer }
          />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el; }}
          value={ this.state.body || ''}
          onChange={ this.updateQuill }
          placeholder="Drag files here or just start typing..."
          theme={'snow'}
          modules={ this.modules } />
      </div>
    );
  }
}

export default NoteShow;
