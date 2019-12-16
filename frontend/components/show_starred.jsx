// import React from 'react';
// import NotebookIndexItem from './notebook_index_item';
// import {Link} from 'react-router-dom';

// class ShowStarred extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.notebook;
    

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.formAction(this.state);
//     this.props.closeModal();
//     // let history = useHistory();
//     // useHistory.push('/');
//     //close modal and force url here
//   }

//   update(field) {
//     return e => this.setState({ [field]: e.currentTarget.value });
//   }

//   render() {
//     const {notebooks} = this.props;
//     return (
//       <div className="notebookform">
//         <ul >
//                     {
//                         notebooks.map((notebook) => (
//                             <NotebookIndexItem
//                                 notebook={notebook}
//                                 deleteNotebook={deleteNotebook}
//                                 updateNotebook={updateNotebook}
//                                 closeModal = {closeModal}
//                                 key={notebook.id*1}
//                                 //WHY??
//                             />
//                         ))
//                     }
//                 </ul>
//       </div>
//     );
//   }
// }

// export default ShowStarred;
