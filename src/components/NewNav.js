import React, {Component} from 'react';
import "./NewNav.css"
class NewNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollOn: false,
            darkTheme: false,
        };
    }
    componentDidMount() {
        // Animation
        document.body.classList.remove('hero-anime');

        // Scroll Event
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            if (scroll >= 10) {
                this.setState({ scrollOn: true });
            } else {
                this.setState({ scrollOn: false });
            }
        });
    }

    // Dark/Light Mode Switch
    switchTheme = () => {
        this.setState({ darkTheme: !this.state.darkTheme });
    };

    render() {
        const { scrollOn, darkTheme } = this.state;
        const navigationClass = `navigation-wrap bg-light ${scrollOn ? 'scroll-on' : 'start-header start-style'}`;
        const containerClass = darkTheme ? 'dark' : '';
        return (
            <>
            <body className="hero-anime">


            <div className="section full-height">
                <div className="absolute-center">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1><span>B</span><span>o</span><span>o</span><span>t</span><span>s</span><span>t</span><span>r</span><span>a</span><span>p</span> <span>4</span><br/>
                                        <span>m</span><span>e</span><span>n</span><span>u</span></h1>
                                    <p>scroll for nav animation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div id="switch">
                                        <div id="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 py-5">
            </div>
            </body>
            </>
        );
    }
}

export default NewNav;