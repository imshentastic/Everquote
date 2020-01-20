import React from 'react';
import { Link } from 'react-router-dom';
import timeSince from '../../../util/date_util';



// const NoteIndexItem = props => (
    
//         <li className="modal-note-content-list">
//               <Link className="modal-note-content-list-link" to={`/api/notes/${props.note.id}/show`}>
          
                  
//                   <Link className="modal-note-content-list-info-edit" to={`/api/notes/${props.note.id}/edit`}><h3>{props.note.heading}</h3></Link>

//                   <h3 class="small">{props.note.body}</h3>
//                   <Link to="/api/notes" className="modal-note-content-list-delete" onClick={() => props.deleteNote(props.note.id)}></Link>
          
//               </Link>
//                   <div className="modal-note-content-list-hr"></div>
            
//         </li>
//       );

// export default NoteIndexItem;

class NotesIndexItem extends React.Component {

  //set refresh interval
  componentDidMount() {
    this.intervalId = setInterval(this.updateDate, 1000);
  }

  //clear interval if component is unmounting from render
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  

  constructor(props) {
    super(props);
    this.state = {
      lastUpdate: timeSince(this.props.note.updated_at)
    };
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate() {
    this.setState({ lastUpdate: timeSince(this.props.note.updated_at) });
  }

  render() {
    const { note, match, deleteNote, openModal } = this.props;
    return (
        <li className="modal-note-content-list">
            {/* <Link className="modal-note-content-list-link" to={`/api/notes/${note.id}/show`} onClick={() => openModal('shownote')}> */}
            <Link className="modal-note-content-list-link" to={`/api/notes/${note.id}/show`} >
            {/* <div className="modal-note-content-list-link" onClick={() => openModal('shownote')}> */}
                {/* <Link className="modal-note-content-list-info-edit" to={`/api/notes/${note.id}/edit`}><h3>{note.heading}</h3></Link> */}
                <div className="modal-note-content-list-info-edit" ><h3>{note.heading}</h3></div>
                <h4 className="modal-note-content-list-info-lastupdate">{ this.state.lastUpdate }</h4>
                <h3 className="small">{note.body.replace(/<p>/g, "\n").replace(/<[^>]+>/g, "")}</h3>
                <Link to="/" className="modal-note-content-list-delete" onClick={() => deleteNote(note.id)}></Link>
                
            </Link>
                  <div className="modal-note-content-list-hr"></div>
        </li>
     
   

    );
  }

}

export default NotesIndexItem;
