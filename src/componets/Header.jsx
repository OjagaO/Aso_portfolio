import React from 'react';
import './style.css'
import icon from './logo/toukalogo4.png';
import manIcon from './logo/image.man.png';
import spIcon from './logo/image.phone.png';
import pcIcon from './logo/image.notepc.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const openBtn = document.getElementById("btn-area");
    const spHeader = document.getElementById("open-hd");
    openBtn.addEventListener("click",function(){
        openBtn.classList.add("swich");
        spHeader.classList.add("swich");
    })

    return (
        <div className="side-header">
                <nav className="side-bar">
                    <div className="header-logo-box">
                        <Link className="index-link header-list-logo target" to="/React_portfolio/"><img
                                className="header-logo" src={icon} alt="logo"></img></Link>
                        <Link className="about-link header-list-item target to_a" to="/React_portfolio/about"><img
                                className="mono-logo" src={manIcon} alt="logo"></img>
                            <p className="header-list-item__title">About</p>
                        </Link>
                        <Link className="works-link header-list-item target to_w" to="/React_portfolio/work"><img
                                className="mono-logo" src={pcIcon} alt="logo"></img>
                            <p className="header-list-item__title">Works</p>
                        </Link>
                        <Link className="contact-link header-list-item target to_c" to="/React_portfolio/contact"><img
                                className="mono-logo" src={spIcon} alt="logo"></img>
                            <p className="header-list-item__title">Contact</p>
                        </Link>
                        <div className="hamburger">
                            <div className="hamburger-btn">
                                <div id="btn-area">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div id="open-hd">
                                <Link className="open-item target to_a" to="/React_portfolio/about"><img className="mono-logo"
                                        src={manIcon} alt="logo"></img>
                                    <p className="">About</p>
                                </Link>
                                <Link className="open-item target to_w" to="/React_portfolio/work"><img className="mono-logo"
                                        src={pcIcon} alt="logo"></img>
                                    <p className="">Works</p>
                                </Link>
                                <Link className="open-item target to_c" to="/React_portfolio/contact"><img className="mono-logo"
                                        src={spIcon} alt="logo"></img>
                                    <p className="">Contact</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default Header;