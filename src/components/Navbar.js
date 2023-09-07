import React, {Component} from "react"
class Navbar extends Component{
    render() {

        return (<header className="" id="header" style={{"marginTop": "60px"}}>
                <div className="container-fluid">
                    <div className="pull-left" id="logo">
                        <a className="scrollto" href="/">
                            <img alt="" id="logo_img"
                                 src="https://yja.github.io/new_yja/assets/images/logo-wide-white@2x.png"
                                 style={{"maxHeight": "40px"}} title=""/>
                        </a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active" id="home_nav_item">
                                <a className="main-nav-option blue-line" href="/"
                                   style={{"color": "rgb(40, 83, 107)"}}>Home</a>
                            </li>
                            <li>
                                <a className="main-nav-option blue-line" href="/about"
                                   style={{"color": "rgba(40, 83, 107, 0.5)"}}>About</a>
                            </li>
                            <li>
                                <a className="main-nav-option blue-line" href="/education"
                                   style={{"color": "rgba(40, 83, 107, 0.5)"}}>Education</a>
                            </li>
                            <li>
                                <a className="main-nav-option blue-line" href="/events"
                                   style={{"color": "rgba(40, 83, 107, 0.5)"}}>Events</a>
                            </li>
                            <li>
                                <a className="main-nav-option blue-line" href="/community"
                                   style={{"color": "rgba(40, 83, 107, 0.5)"}}>Community</a>
                            </li>
                            <li>
                                <a className="main-nav-option blue-line" href="/donate"
                                   style={{"color": "rgba(40, 83, 107, 0.5)"}}>Donate</a>
                            </li>
                            <li id="account">
                                <i aria-hidden="true" className="fa fa-user navbar-icon navbar-icon-blue"
                                   id="accountIcon" style={{marginTop: "10px", marginLeft: "20px"}}></i>
                                <div className="dropdown" id="login-dropdown"
                                     style={{display: "none", marginLeft: "-87px"}}>
                                    <div className="row">
                                        <div className="col-md-12" id="login-dropdown"><br/>
                                            <a className="account-button" href="/login"
                                               style={{marginTop: "0px", color: "rgba(40, 83, 107, 0.5)"}}>
                                                Login
                                            </a>
                                            <a className="account-button" href="/join"
                                               style={{marginTop: "0px", color: "rgba(40, 83, 107, 0.5)"}}>
                                                Join
                                            </a><br/><br/>
                                            <p className="footer-text">
                                                <a className="footer-options" href="/about"
                                                   style={{color: "rgba(40, 83, 107, 0.5)"}}>About</a> |
                                                <a className="footer-options" href="/terms"
                                                   style={{color: "rgba(40, 83, 107, 0.5)"}}>Terms</a> |
                                                <a className="footer-options" href="/privacy"
                                                   style={{color: "rgba(40, 83, 107, 0.5)"}}>Privacy</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a className="blue-line" href="/join" id="accountText1"
                                   style={{display: "none"}}>Join</a>
                                <a className="blue-line" href="/login" id="accountText2"
                                   style={{display: "none"}}>Login</a>
                            </li>
                            <li id="search_box" style={{display: "none"}}>
                                <form action="/search" id="search_form" method="post">
                                    <input name="_token" type="hidden"
                                           value="sZ8NsOxSSEWYdeMScNs6IH4ai10L2CsaA3UxiKjU"/>
                                    <input autoFocus="" name="search" placeholder="Search yja.org" type="text"/>
                                </form>
                            </li>
                            <li id="search">
                                <i aria-hidden="true" className="fa fa-search navbar-icon navbar-icon-blue"
                                   id="searchIcon" style={{marginTop: "10px"}}></i>
                            </li>
                            <li id="mobile_search_box" style={{display: "none"}}>
                                <form action="/search" id="mobile_search_form" method="post">
                                    <input name="_token" type="hidden"
                                           value="sZ8NsOxSSEWYdeMScNs6IH4ai10L2CsaA3UxiKjU"/>
                                    <input autoFocus="" className="mobile-search" name="search"
                                           placeholder="Search yja.org" type="text"/>
                                </form>
                            </li>
                            <li id="closeIcon" style={{display: "none"}}>
                                <i aria-hidden="true" className="fa fa-times navbar-icon navbar-icon-blue"
                                   style={{marginTop: "10px"}}></i>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Navbar;
/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Jains In Germany</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.feature}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>*/
