import {Link} from 'react-router-dom';
import React from 'react';

export default () => {
    const home = (
        <div className="sidebar">
            <button>NEW NOTE</button>
            <button>NEW MEETING NOTE</button>
            <button>SEARCH</button>
            <button>WORKCHAT</button>
            <button>SHORTCUTS</button>
            <button>NOTES</button>
            <button>NOTEBOOKS</button>
            <button>TAGS</button>
        </div>
    ); 
    return (
        <>
            {home}
        </>
    )
}