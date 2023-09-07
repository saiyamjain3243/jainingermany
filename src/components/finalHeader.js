import React, {Component} from 'react';
import "./NewNav.css"
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseEnter = () => {
        if (window.innerWidth > 750) {
            this.setState({ isHovered: true });
        }
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { isHovered } = this.state;
        return (
            <li
                className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${isHovered ? 'show' : ''}`}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.children}
            </li>
        );
    }
}
class FinalHeader extends Component {

    render() {
        return (
            <div>
                <div className="navigation-wrap bg-light start-header start-style">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-md navbar-light">

                                    <a className="navbar-brand" href="https://front.codes/" target="_blank"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""/></a>

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                                            <MenuItem>
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <a className="nav-link" href="#">Events</a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a className="nav-link" href="#">Education</a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Register</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <a className="nav-link" href="#">About</a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a className="nav-link" href="#">Contact</a>
                                            </MenuItem>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinalHeader;