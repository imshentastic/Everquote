import React from 'react';
import NoteIndexContainer from './note/note_index_container';
import GreetingContainer from '../greeting/greeting_container';
import HomeContainer from './home_container';

import NoteShowContainer from './note/note_show_container';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="notes-container">
                <section className="notes-header-and-index">
                    { this.header }
                    <NoteIndexContainer />
                    <GreetingContainer />
                    <HomeContainer />
                    {/* <NoteShowContainer /> */}
                </section>
            </div>
        );
    }

}

export default Dashboard;
