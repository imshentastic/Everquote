import React from "react";
import {CSSTransition} from 'react-transition-group';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        // this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            
        <div
            // style={{ border: "1px solid #CCC" }}
            onMouseEnter={() => this.toggleDropdown()}
            onMouseLeave={() => this.toggleDropdown()}
            // onBlur={() => this.toggleDropdown()}
            // onFocus={() => this.toggleDropdown()}
            tabIndex="0"
            className="splash-nav-dropdown"
        >
            Portfolio
            {this.state.open && (
                <div className="splash-nav-dropdown-sub">
                    <div>
                        <a href="https://www.linkedin.com/in/mike-shen" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    </div>
                    <div>
                        <a href="https://github.com/imshentastic" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                    <div>
                        <a href="https://angel.co/mike-shen-4" rel="noopener noreferrer" target="_blank">AngelList</a>
                    </div>
                    <div>
                        <a href="https://michaelshen.dev/" rel="noopener noreferrer" target="_blank">Portfolio</a>
                    </div>
                </div>
            )}
        </div>
        );
    }
}
    

export default Dropdown;