import {Link} from 'react-router-dom';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
// import NotebookIndexContainer from '../home/notebook_index_container';

export default () => {
    const home = (
        <>
        <div className="wrapper">
            <div className="sidebar"></div>
            <div className="indexbar"></div>
            <div className="taskbar"></div>
            
            <div className="grid">
                <img className="grid-icon" src={window.penguinImg} alt="Penguin" />
                <button class="button-1">NEW NOTE</button>
                <button class="button-2">NEW MEETING NOTES</button>
                <button class="button-3">SEARCH</button>
                <button class="button-4">WORK CHAT</button>
                <button class="button-5">SHORTCUTS</button>
                <button class="button-6">NOTES</button>
                <button class="button-7">NOTEBOOKS</button>
                <button class="button-8">TAGS</button>
                <div></div>
                <div className="notesbar">
                    <div>Notes</div>
                    <div>Column</div>
                    <div>of</div>
                    <div>Notes</div>

                </div>
                
            </div>

           
        </div>
        </>
    ); 
    return (
        <>
            {home}
            {/* <GreetingContainer /> */}
        </>
    )
}