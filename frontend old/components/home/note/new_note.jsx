import React from 'react';
import ReactQuill from 'react-quill';

class NewNote extends React.Component {

    componentDidUpdate() {
        this.attachQuillRefs();
    }

    componentWillReceiveProps(nextProps) {
        this.attachQuillRefs();
        this.quillRef.focus();
        if (Object.keys(nextProps.notebooks).length > 0) {
          this.setState({
            notebook_id: Object.keys(nextProps.notebooks)[0]
          });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          heading: "",
          body: ""
        };

        this.quillRef = null;
        // Instance of quill, initiating as null
        this.reactQuillRef = null;
        // Actual ReactQuill component

        this.updateQuill = this.updateQuill.bind(this);
        this.updateHeading = this.updateHeading.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.toggleNotebookDropDown = this.toggleNotebookDropDown.bind(this);
        this.handleAddNotebook = this.handleAddNotebook.bind(this);
        this.handleSelectNotebook = this.handleSelectNotebook.bind(this);

        // Quill's custom modules, allowing customization
        this.modules = {
            toolbar: [
            
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }, 'bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
            [{ 'align': [] }, {'list': 'bullet'}, {'list': 'ordered'}],
            ['link', 'image'],
            [{'indent': '+1'}, {'indent': '-1'}],
            
            [{ 'direction': 'rtl' }],   
            [{ 'script': 'sub'}, { 'script': 'super' }, 'clean']
            ]
        };
    }
    //~~~~~~~~~~~end of constructor

    componentdidMount() {
        this.attachQuillRefs();
        this.quillRef.focus();
        document.querySelector('.cancel').classList.remove('hidden');
        document.querySelector('.add-note').classList.remove('hidden');
        if (this.state.heading || this.state.body) {
            document.querySelector('.add-note').disabled = false;
        } else {
            document.querySelector('.add-note').disabled = true;
        }
    }

        //detects whether heading or body are changed from null
        updateQuill(value) {
            if (this.quillRef) {
            this.setState({
                body: value
            
            }, () => {
                if (this.state.heading || this.state.body) {
                document.querySelector('.add-note').disabled = false;
                } else {
                document.querySelector('.add-note').disabled = true;
                }
            });
        }}

        updateHeading(event) {
            this.setState({
              heading: event.currentTarget.value
            }, () => {
              if (this.state.heading || this.state.body) {
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
            this.props.closeModal();
            this.props.history.push('/');
          }
        
          handleAddNote() {
            this.props.addNote(this.state)
              .then(() => this.props.history.push('/'));
            document.querySelector('.add-note').classList.add('hidden');
          }
        
        
          toggleNotebookDropDown() {
            document.querySelector('.notebook-dropdown').classList.toggle('hidden');
          }
        
          // handles creation of new notebook
          handleAddNotebook() {
            this.props.history.push('/create-notebook');
          }
        
          //select notebook and sets state based on notebookId
          handleSelectNotebook(event) {
            if (this.notebookId !== event.target.id) {
              this.notebookId = event.target.id;
              this.setState({
                notebook_id: this.notebookId
              });
            }
          }

        //tags

        render () {
            const { notebooks, note, tags } = this.props;
            let notebookSelectItems, currentNotebook, noteTagIndex;
            if (Object.keys(notebooks).length > 0) {
            if (!this.notebookId) {
                this.notebookId = Object.keys(notebooks)[0];
            }
            currentNotebook = notebooks[this.notebookId].title;
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
            // noteTagIndex = this.state.tags.map((tagName, idx) =>
            // <section
            //     key={ idx }
            //     className="note-tag-index-item">
            //     { tagName }
            //     <span
            //     id={ tagName }
            //     onClick={ this.handleDeleteTag }>
            //     x
            //     </span>
            // </section>
            // );
            return(
                <section className="new-note-container">
                    <section className="note-select-options">
                        {/* <img
                            src="https://res.cloudinary.com/malice/image/upload/v1500410337/notebook-small-gray_hutdbh.png"
                            alt="Notebook Icon"
                            className="small-notebook-icon"
                            onClick={ this.toggleNotebookDropDown } /> */}
                        <ul className="notebook-dropdown hidden">
                            <li
                            className="select-add-notebook"
                            onClick={ this.handleAddNotebook }>
                            {/* <img
                                src="https://res.cloudinary.com/malice/image/upload/v1500766546/add-notebook.png"
                                alt="Add Notebook Icon"
                                className="select-add-notebook-icon" /> */}
                            Create new notebook
                            </li>
                            { notebookSelectItems }
                        </ul>
                    </section>
                    <nav
                        className="select-notebook"
                        onClick={ this.toggleNotebookDropDown }>
                        { currentNotebook }
                    </nav>
                    {/* <img
                        src="https://res.cloudinary.com/malice/image/upload/v1500410338/tag-small-gray_riahyt.png"
                        alt="Tag Icon"
                        className="small-tag-icon" /> */}
                    <section className="note-tag-index">
                        { noteTagIndex }
                        <input
                        className="new-note-tag"
                        placeholder="+"
                        onChange={ this.updateNewTag }
                        onKeyDown={ this.addTagToNote }
                        value={ this.state.newTag } />
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
                        value={ this.state.heading }
                        onChange={ this.updateHeading } />
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




