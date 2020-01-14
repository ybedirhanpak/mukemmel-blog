import React from "react";

class Navbar extends React.Component {

    componentDidMount() {
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 10) {
                document.getElementById("app-navbar").classList.add("scrolled");
            } else {
                document.getElementById("app-navbar").classList.remove("scrolled");
            }
        }
    }

    render() {
        return (
            <nav id="app-navbar" className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <a href="/" className="blogger-name">
                            Yahya Pak
                        </a>
                    </div>
                    <div className="navbar-links">
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                        <a href="/">Github</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;