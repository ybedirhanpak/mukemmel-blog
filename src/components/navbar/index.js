import React from "react";

class Navbar extends React.Component {

    componentDidMount() {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            // Make navbar smaller
            if (currentScrollPos > 10) {
                document.getElementById("app-navbar").classList.add("scrolled");
            } else {
                document.getElementById("app-navbar").classList.remove("scrolled");
            }

            // While scolling down, hide the navbar
            if(currentScrollPos > 100 && currentScrollPos > prevScrollPos) {
                document.getElementById("app-navbar").classList.add("disabled");
            } else {
                document.getElementById("app-navbar").classList.remove("disabled");
            }

            prevScrollPos = currentScrollPos;
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