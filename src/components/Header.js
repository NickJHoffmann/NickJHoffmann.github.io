import "../scss/partials/_header.scss"
import logo from '../assets/logo.png'

import React from "react";

function Header() {
    return (
        <div class="header">
            <div class="header-flex-main-item">
                <img src={logo} alt="logo" className="logo"></img>
            </div>

            <div className="header-flex-main-item">
                <nav className="header-nav">
                    <a href="/about">.about()</a>
                    <a href="/work">.work()</a>
                    <a href="/experience">.experience()</a>
                </nav>
                <button>resume</button>
                <a href="https://github.com/NickJHoffmann">
                    <img src="https://placehold.jp/24x24.png" alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/nicholas-j-hoffmann/">
                    <img src="https://placehold.jp/24x24.png" alt="LinkedIn"/>
                </a>
            </div>

        </div>
    );
}

export default Header;
