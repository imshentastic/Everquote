import {Link} from 'react-router-dom';
import React from 'react';

export default ({currentUser, logout}) => {

    return (
        <>
            <div className="splash-nav-background">
                <div className="splash-footer">
                    
                    <div className="splash-footer-linkA">
                        <a href="https://michaelshen.dev/" rel="noopener noreferrer" target="_blank">Portfolio</a>
                        
                    </div>
                    <div className="splash-footer-linkB">
                        <a href="https://www.linkedin.com/in/mike-shen" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    </div>
                    <div className="splash-footer-linkC">
                        <a href="https://github.com/imshentastic" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                    <div className="splash-footer-linkD">
                    <a href="https://angel.co/mike-shen-4" rel="noopener noreferrer" target="_blank">AngelList</a>
                    </div>
                    <h2>© 2020 Imshentastic Corp. All rights reserved.</h2>
                    
                </div>
            </div>
        </>
    )
}