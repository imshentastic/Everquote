import React from 'react';
import ReactQuill from 'react-quill';

class NewNote extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
    this.quillRef.focus();
    document.querySelector('.cancel').classList.remove('hidden');
    document.querySelector('.add-note').classList.remove('hidden');
    if (this.state.header || this.state.body) {
      document.querySelector('.add-note').disabled = false;
    } else {
      document.querySelector('.add-note').disabled = true;
    }
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  componentWillReceiveProps(nextProps) {
    this.attachQuillRefs();
    this.quillRef.focus();
    if (nextProps.notebooks.allIds.length > 0) {
      this.setState({
        notebook_id: nextProps.notebooks.allIds[0]
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      header: "",
      body: "",
      plain_text_body: "",
      notebook_id: this.props.notebooks.allIds[0],
      tags: [],
      newTag: ""
    };
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.toggleNotebookDropDown = this.toggleNotebookDropDown.bind(this);
    this.handleAddNotebook = this.handleAddNotebook.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.updateNewTag = this.updateNewTag.bind(this);
    this.addTagToNote = this.addTagToNote.bind(this);
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
        body: value,
        plain_text_body: this.quillRef.getText()
      }, () => {
        if (this.state.header || this.state.body) {
          document.querySelector('.add-note').disabled = false;
        } else {
          document.querySelector('.add-note').disabled = true;
        }
      });
    }
  }

  updateHeader(event) {
    this.setState({
      header: event.currentTarget.value
    }, () => {
      if (this.state.header || this.state.body) {
        document.querySelector('.add-note').disabled = false;
      } else {
        document.querySelector('.add-note').disabled = true;
      }
    });
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  handleCancel() {
    document.querySelector('.cancel').classList.add('hidden');
    this.props.history.push('/notes');
  }

  handleAddNote() {
    this.props.addNote(this.state)
      .then(() => this.props.history.push('/notes'));
    document.querySelector('.add-note').classList.add('hidden');
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
      });
    }
  }

  handleDeleteTag(event) {
    const index = this.state.tags.indexOf(event.currentTarget.id);
    const tagsDup = this.state.tags;
    tagsDup.splice(index, 1);
    this.setState({
      tags: tagsDup,
      newTag: ""
    });
  }

  updateNewTag(event) {
    this.setState({
      newTag: event.target.value
    });
  }

  addTagToNote(event) {
    const key = event.keyCode;
    if (key === 13) {
      this.setState({
        tags: this.state.tags.concat(this.state.newTag),
        newTag: ""
      });
    }
  }

  render() {
    const { notebooks, note, tags } = this.props;
    let notebookSelectItems, currentNotebook, noteTagIndex;
    if (notebooks.allIds.length > 0) {
      if (!this.notebookId) {
        this.notebookId = notebooks.allIds[0];
      }
      currentNotebook = notebooks.byId[this.notebookId].title;
      notebookSelectItems = notebooks.allIds.map((notebookId, idx) =>
        <section
          key={ idx }
          className="notebook-select-item-container"
          onClick={ this.handleSelectNotebook }>
          <li
            key={ idx }
            className="notebook-select-item"
            id={ notebookId }>
            { notebooks.byId[notebookId].title }
          </li>
        </section>
      );
    }
    noteTagIndex = this.state.tags.map((tagName, idx) =>
      <section
        key={ idx }
        className="note-tag-index-item">
        { tagName }
        <span
          id={ tagName }
          onClick={ this.handleDeleteTag }>
          x
        </span>
      </section>
    );
    return(
      <section className="new-note-container">
        <section className="note-select-options">
          
          <ul className="notebook-dropdown hidden">
            <li
              className="select-add-notebook"
              onClick={ this.handleAddNotebook }>
              
              Create new notebook
            </li>
            { notebookSelectItems }
          </ul>
          <nav
            className="select-notebook"
            onClick={ this.toggleNotebookDropDown }>
            { currentNotebook }
          </nav>
          
          <section className="note-tag-index">
            { noteTagIndex }
            <input
              className="new-note-tag"
              placeholder="+"
              onChange={ this.updateNewTag }
              onKeyDown={ this.addTagToNote }
              value={ this.state.newTag } />
          </section>
        </section>
        <button
          className="cancel hidden"
          onClick ={ this.handleCancel }>Cancel</button>
        <button
          className="add-note hidden"
          onClick ={ this.handleAddNote }>Save Note</button>
        <input
          type="text"
          className="new-note-title"
          placeholder="Title your note"
          value={ this.state.header }
          onChange={ this.updateHeader } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el; }}
          placeholder="Drag files here or just start typing..."
          value={this.state.body}
          onChange={this.updateQuill}
          theme={'snow'}
          modules={ this.modules } />
      </section>
    );
  }
}

export default NewNote;
