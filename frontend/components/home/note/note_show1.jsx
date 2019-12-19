import React from 'react';
import ReactQuill from 'react-quill';

class NoteShow extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
    this.quillRef.focus();
    this.firstShow = true;
    this.props.fetchNote(this.props.match.params.noteId);
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
    this.notebookId = nextProps.note.notebook_id;
    this.setState({
      id: nextProps.note.id,
      heading: nextProps.note.heading,
      body: nextProps.note.body
    });
  }

  constructor(props) {
    super(props);
    // debugger
    this.state = this.props.note;
    // {
    // //   id: this.props.note.id,
    //   heading: this.props.note.heading,
    //   body: this.props.note.body,
    //   notebook_id: this.notebookId
    // };

    this.notebookId = this.props.match.params.noteId;
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleNotebookDropDown = this.toggleNotebookDropDown.bind(this);
    this.handleAddNotebook = this.handleAddNotebook.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    
    this.autosaveTimer = null;
    this.autosaveInterval = 500;
    this.modules = {
      toolbar: [
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, 'bold', 'italic', 'underline','strike', 'code-block'],
        [{ 'align': [] }, {'list': 'bullet'}, {'list': 'ordered'}],
        ['link', 'image'],
        [{'indent': '+1'}, {'indent': '-1'}],
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

  handleCancel() {
    this.props.closeModal();
    this.props.history.push('/');
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


  toggleNotebookDropDown() {
    document.querySelector('.notebook-dropdown').classList.toggle('hidden');
  }

  handleAddNotebook() {
    this.props.history.push('/new-notebook');
  }

  handleSelectNotebook(event) {
    if (this.notebookId !== event.target.id) {
      this.notebookId = event.target.id;
      this.setState({
        notebook_id: this.notebookId
      }, () => this.startAutosaveTimer());
    }
  }

  

  render () {
          const { notebooks, note, tags } = this.props;
          let notebookSelectItems, currentNotebook, noteTagIndex;

          if (Object.keys(notebooks).length > 0) {
            if (!this.notebookId) {
                this.notebookId = Object.keys(notebooks)[0];
            }
        //   currentNotebook = notebooks[this.notebookId].title;
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
              <section className="new-note-container">
                  <section className="note-select-options">
                      
                      <ul className="notebook-dropdown hidden">
                          <li
                            className="select-add-notebook"
                            onClick={ this.handleAddNotebook }>
                            {/* Create new notebook */}
                          </li>
                          { notebookSelectItems }
                      </ul>
                  </section>
                  <nav
                      className="select-notebook"
                      onClick={ this.toggleNotebookDropDown }>
                      { currentNotebook }
                  </nav>
                  
              
                  <button
                   
                      onClick ={ this.handleCancel }>Cancel</button>
                  <button
                     
                      onClick ={ this.handleAddNote }>Save Note</button>
                  <input
                      type="text"
                      className="new-note-title"
                      placeholder="Title your note"
                    //   value={ this.state.heading }
                      onChange={ this.updateHeading } />
                  
                  <section className="modal-child3">
                        <ReactQuill
                        ref={(el) => { this.reactQuillRef = el; }}
                        placeholder="Drag files here or just start typing..."
                        //   value={this.state.body}
                        onChange={this.updateQuill}
                        theme={'snow'}
                        modules={ this.modules } />
                   </section>  
              </section>
          );
      }



    }


export default NoteShow;
